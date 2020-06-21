import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"

export default () => {
  return (
    <PageLayout>
      <SEO title="Blog" />
      <PageTitle title="My Blog" />
    </PageLayout>
  )
}
