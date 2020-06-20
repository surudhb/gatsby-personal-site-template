/** https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/ */

import React from "react"
import { Howl } from "howler"

const vaderAudio = new Howl({
  src: ["../../sounds/Darth-Vader.mp3"],
  format: ["mp3"],
})
const r2d2Audio = new Howl({
  src: ["../../sounds/R2-D2.mp3"],
  format: ["mp3"],
})

const defaultState = {
  dark: false,
  toString: () => ``,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

class ThemeProvider extends React.Component {
  state = {
    dark: false,
  }

  toString = () => (this.state.dark ? `dark` : `light`)

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
    vaderAudio.stop()
    r2d2Audio.stop()
    dark ? vaderAudio.play() : r2d2Audio.play()
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          toString: this.toString,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
