import React from "react"
import { Jumbotron } from "react-bootstrap"

export default ({ title, children }) => (
  <Jumbotron className="bg-none pt-4 mb-5 pb-0">
    <h1>
      {title}&nbsp;<span>{children}</span>&nbsp;
    </h1>
  </Jumbotron>
)
