import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ location }) => {
  return (
    <Layout>
      <SEO pagetitle=" ページが見つかりませんお" pagepath={location.pathname} />
      <h1 style={{ padding: "20vh", textAlign: "center" }}>
        お探しのページは見つかりませんでした
      </h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
