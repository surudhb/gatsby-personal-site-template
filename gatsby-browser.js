import React from "react"
import { ThemeProvider } from "./src/utils/theme-context"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
