import React from "react"
import { Jumbotron } from "react-bootstrap"

export default ({ title, children }) => (
  <Jumbotron className="bg-none pt-5 pb-0">
    <h1>
      {title} <span>{children}</span>{" "}
    </h1>
  </Jumbotron>
)
