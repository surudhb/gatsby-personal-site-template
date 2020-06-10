/** https://www.gatsbyjs.org/docs/add-seo-component/ */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, image: img, title, pathname }) => {
  const { site } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description
  const image = img && img.src ? `${site.siteMetadata.siteUrl}${img.src}` : null

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: site.siteMetadata.keywords.join(`,`) },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: `title` },
        { name: `twitter:description`, content: metaDescription },
      ]
        .concat(
          img
            ? [
                { property: "og:image", content: image },
                { property: "og:image:width", content: img.width },
                { property: "og:image:height", content: img.height },
                { name: "twitter:card", content: "summary_large_image" },
              ]
            : [{ name: "twitter:card", content: "summary" }]
        )
        .concat(meta)}
    />
  )
}

export default SEO

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteUrl
      }
    }
  }
`
