import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>En français</h1>

      <Link to="/">Aller à l'anglais</Link>
    </Layout>
  )
}

export default IndexPage;
