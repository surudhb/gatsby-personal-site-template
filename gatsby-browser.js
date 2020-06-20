import React from "react"
import { ThemeProvider } from "./src/utils/theme-context"
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
