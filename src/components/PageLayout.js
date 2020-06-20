import React from "react"
import ThemeContext from "../utils/theme-context"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <ThemeContext.Consumer>
    {({ toString }) => (
      <Container fluid className={`px-0 theme-${toString()}`}>
        <Container fluid className="px-0 app-container">
          <Header />
          <Container fluid className="min-vh-100">
            {children}
          </Container>
          <Footer />
        </Container>
      </Container>
    )}
  </ThemeContext.Consumer>
)
