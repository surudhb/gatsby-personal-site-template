import React from "react"
import { Nav, Navbar } from "react-bootstrap"

export default () => (
  <Navbar fixed="bottom text-muted">
    <Nav className="m-auto">
      John Doe &copy; {new Date().getFullYear()}. Made with ❤ &
      <a href="https://www.gatsbyjs.org/">&nbsp;Gatsby</a>
    </Nav>
  </Navbar>
)
