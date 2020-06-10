import React from "react"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import ThemeContext from "../utils/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => (
  <ThemeContext.Consumer>
    {theme => (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg={theme.dark ? "vader-dark" : "light"}
        variant={theme.dark ? "dark" : "light"}
      >
        <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
          <FontAwesomeIcon
            icon={["fab", `${theme.dark ? "empire" : "rebel"}`]}
            className={`brand-icon ${theme.dark ? "empire" : "rebel"}`}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav className="pr-3 mr-4">
            <Nav.Link className="ml-2" as={Link} to="/blog">
              <span>Blog</span>
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/about">
              <span>About</span>
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/projects">
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/resume">
              <span>Resume</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label=""
                checked={theme.dark}
                onChange={theme.toggleDark}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
  </ThemeContext.Consumer>
)
