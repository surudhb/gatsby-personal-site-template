import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
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
        <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/z-logo-dark.png` : `../../icons/z-logo-light.png`}
          alt={dark ? "The Dark Side" : "The Ashla"}
        />
        {unemployed && (
          <p className="mt-2">
            <b> Hey there, my name is ...</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Hacker by night` : `Programmer by night`}
            </i>
          </p>
          <p><FontAwesomeIcon
          icon={["fab", `${dark ? "empie" : "rebel"}`]}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
          title="Home"
        /> 
          </p>
          
          <p>My website is currently under construction, so please be kind :')</p>
          
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
        <a
            href="https://linkedin.com/in/zack-eaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
        
          <a
            href="https://instagram.com/zackaryeaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="icons instagram"
              title="Instagram"
            />
          </a>

        <a
            href="https://www.facebook.com/eatonstl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="icons facebook"
              title="Facebook"
            />
          </a>

          <a
            href="https://www.twitter.com/zack_eaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>

          <a
            href="https://dev.to/zackeaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "dev"]}
              className="icons dev"
              title="Dev"
            />
          </a>
          
          <a
            href="https://www.github.com/zackeaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>

        

          <a
            href="mailto:zackeaton@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>

          <a href="../../resume_zack_eaton.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
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
