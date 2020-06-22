import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a href={link}>{title}</a> -<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { dark, toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <Container className="text-center">
        <PageTitle title="About Me" />
        <section>
          <article>
            <Image
              rounded
              width="140"
              height="140"
              src={`../../icons/luke-${toString()}.png`}
              alt={author}
            />
          </article>
          <article
            style={{ maxWidth: "75%" }}
            className="m-auto pt-2 text-justify"
          >
            <p className="text-center">
              {designations.map((attr, i) => (
                <>
                  &nbsp;<b key={attr}>{attr}</b>&nbsp;
                  {i < designations.length - 1 && <>||</>}
                </>
              ))}
            </p>
            <p style={{ textIndent: "5em" }} className="mt-4 pt-2">
              Hello there! My name is <b>{`${author}`}</b>. I am a{" "}
              <a
                href="https://www.dictionary.com/e/fictional-characters/padawan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                padawan
              </a>{" "}
              <b>{occupation}</b> discovering the ways of the code. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p style={{ textIndent: "5em" }}>
              In my spare time, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p style={{ textIndent: "5em" }}>
              Check out my <Link to="/projects">projects</Link> to see what I've
              been up to! Or check out my <Link to="/blog">blog</Link> to see
              what's recently caught my eye!
            </p>
          </article>
          <article style={{ maxWidth: "75%" }} className="m-auto">
            {unemployed && (
              <>
                <hr />
                <p style={{ fontSize: "1.3rem" }}>
                  <small>
                    I am <b>currently looking for new opportunities</b>! If you
                    like what you <Link to="/resume">see</Link>, let's get in{" "}
                    <a
                      href="mailto:surudhb@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      touch
                    </a>
                    !
                  </small>
                </p>
              </>
            )}
            <hr />
            <h4 className={`pt-4 ${dark ? "text-white" : "text-dark"}`}>
              <small>Here are a couple of books from my reading list:</small>
            </h4>
            <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>
              {bookLinks}
            </ul>
            <h4 className={`pt-4 ${dark ? "text-white" : "text-dark"}`}>
              <small>Here are a couple of shows from my watch list:</small>
            </h4>
            <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>
              {showLinks}
            </ul>
            <h4 className={`pt-4 ${dark ? "text-white" : "text-dark"}`}>
              <small>Here are a couple of movies from my watch list:</small>
            </h4>
            <p>
              <i>...waaaay too many to list.</i>
            </p>
          </article>
        </section>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
