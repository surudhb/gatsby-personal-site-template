import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"

const SubTitle = ({ ttr, date, author }) => (
  <div className="mb-5">
    <h5 className="text-muted">
      Time to read: {ttr}
      <small>min</small> | {date} | {author}
    </h5>
  </div>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          ttr={post.timeToRead}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
        />
      }
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
        author
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      timeToRead
    }
  }
`
