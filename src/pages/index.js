import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = (data) => { 

  return (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {data.data.pages.edges.map((page, i) => {
      return (<div><Link key={i} to={page.node.slug}>{page.node.title}</Link> <br /></div>)
    })}

  </Layout>
)
}

export default IndexPage

export const query = graphql`
  {
    pages: allMyPagesJson {
      edges {
        node {
          title
          description
          content
          slug
        }
      }
    }
  }
`