import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col, Badge } from "react-bootstrap"

const CompanyCard = ({ frontmatter, image }) => {
  const { company, position, startDate, endDate, location } = frontmatter
  return (
    <Container className="m-auto work-history">
      <Img
        fluid={image}
        style={{
          maxHeight: "15vmax",
          maxWidth: "15vmax",
        }}
        className="m-auto"
      />
      <h2 className="m-auto pt-2">{company}</h2>
      <h5 className="text-muted">{location}</h5>
      <h4 className="mt-3">{position}</h4>
      <h5
        className="text-muted mt-4"
        style={{ lineHeight: "1.1rem", fontSize: "1.2rem" }}
      >
        {startDate}-{endDate}
      </h5>
    </Container>
  )
}

export default ({ html, frontmatter, image }) => {
  return (
    <Container className="p-1 project-link text-center">
      <Row>
        <Col className="col-md-4 col-5">
          <CompanyCard frontmatter={frontmatter} image={image} />
        </Col>
        <Col className="col-md-8 col-7">
          <p
            className="text-justify mt-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-4"></Col>
        <Col className="col-md-8 col-7">
          <div>
            {frontmatter.tags.map(tag => (
              <Badge key={tag} pill className="mr-2 p-0 px-3 resume-tags">
                <h4>
                  <small>{tag}</small>
                </h4>
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
