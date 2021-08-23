import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form, Image } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
//import { Image } from "react-bootstrap"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
      {/* New iconography */}
      <Image
          width="75"
          height="75"
          fluid
          src={dark ? `../../icons/z-logo-dark.png` : `../../icons/z-logo-light.png`}
          alt={dark ? "The Dark Side" : "The Ashla"}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
          title="Home"
        />
        {/* End New iconography */}
        {/* <FontAwesomeIcon
          icon={["fab", `${dark ? "empire" : "rebel"}`]}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
          title="Home"
        />  */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
        <Nav.Link className="ml-2" as={Link} to="/" title="Home">
            Home
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/blog" title="Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            Resume
          </Nav.Link>
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
