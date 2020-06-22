import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

export default props => {
  const { excerpt, featuredImages, tags, title, to } = props
  return (
    <Container
      style={{ overflow: "auto" }}
      className="project-link text-center"
    >
      <Link className="project-link" to={to} style={{ textDecoration: "none" }}>
        <Row>
          {featuredImages &&
            featuredImages.map(image => (
              <Col key={image.src}>
                <Img
                  fluid={image}
                  style={{ maxWidth: "13rem" }}
                  className="m-auto"
                />
              </Col>
            ))}
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}
