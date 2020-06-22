import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"

const SubTitle = ({ tags }) => (
  <div className="mb-5">
    {tags.map(tag => (
      <Badge key={tag} pill variant="dark" className="px-3 mr-1">
        <h5 className="text-white my-0">{tag}</h5>
      </Badge>
    ))}
  </div>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={<SubTitle tags={post.frontmatter.tags} />}
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
      excerpt
    }
  }
`
