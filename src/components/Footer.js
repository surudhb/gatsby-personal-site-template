import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        {author} &copy; {new Date().getFullYear()}. Made with{" "}
        <span style={{ color: "red" }}>&nbsp;❤&nbsp;</span> &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </span>
    </div>
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
