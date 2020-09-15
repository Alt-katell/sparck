import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>In English</h1>

      <Link to="/fr">Go to French</Link>
    </Layout>
  )
}

export default IndexPage;
