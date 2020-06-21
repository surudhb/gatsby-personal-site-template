import React, { useContext } from "react"
import ThemeContext from "../utils/theme-context"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toString, toggleDark } = useContext(ThemeContext)
  return (
    <Navbar fixed="top" collapseOnSelect variant={toString()}>
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
        <FontAwesomeIcon
          icon={["fab", `${dark ? "empire" : "rebel"}`]}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4">
          <Nav.Link className="ml-2" as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/resume">
            Resume
          </Nav.Link>
        </Nav>
        <Nav>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
