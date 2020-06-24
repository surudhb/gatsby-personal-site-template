import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"
import ThemeContext from "../utils/theme"

export default props => {
  const { dark } = useContext(ThemeContext)
  return (
    <Card
      className={`card-container ${dark && "bg-vader-dark"}`}
      as={Link}
      to={props.to}
      style={{
        width: "20rem",
        height: "22rem",
        color: "#343a40",
        textDecorationColor: `${dark ? "maroon" : "#008cff"}`,
      }}
    >
      <Card.Img
        as={Img}
        fluid={props.featuredImage}
        style={{ height: "9.5vw" }}
      />
      <Card.Body className={`pt-3 ${dark && "text-white"}`}>
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>
          <small>{props.excerpt}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
