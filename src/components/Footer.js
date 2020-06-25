import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. Made with&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span> &&nbsp;
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
