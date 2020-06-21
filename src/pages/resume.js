import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
        {" "}
        <a href="../../resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>
    </PageLayout>
  )
}
