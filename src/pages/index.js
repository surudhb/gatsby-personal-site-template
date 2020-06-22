import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme-context"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Container fluid>
          <Image
            rounded
            fluid
            width="150"
            height="150"
            src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
            alt={dark ? "Darth Vader" : "R2-D2"}
          />
          {unemployed && (
            <p className="mt-2">
              <b> Hey! I am looking for new opportunities :)</b>
            </p>
          )}
        </Container>
        <Container className="py-my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span style={{ color: "#ced4da" }}>{firstName}</span> {lastName}
          </h1>
          <p>
            <i>
              {occupation} by day,{" "}
              {dark ? `Imperial enforcer by night` : `Rebel scum by night`}
            </i>
          </p>
        </Container>
        <hr className="my-3" style={{ width: "40%" }} />
        <div className="d-inline-flex icons-container">
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
            />
          </a>
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              className="icons fcc"
            />
          </a>
          <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              className="icons hr"
            />
          </a>
          <a
            href="mailto:johndoe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
