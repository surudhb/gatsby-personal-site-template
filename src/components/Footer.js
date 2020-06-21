import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <Navbar fixed="bottom" className="footer text-muted">
      <Nav className="m-auto">
        {author} &copy; {new Date().getFullYear()}. Made with{" "}
        <span style={{ color: "red" }}>&nbsp;❤&nbsp;</span> &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </Nav>
    </Navbar>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
