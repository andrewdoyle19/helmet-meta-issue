import * as React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const PageTemplate = data => {  
  const { title, description, content } = data.data.currentPage 
  return (
    <Layout>
      <Seo title={title} description={description} />
      <h1>{title}</h1>
      <p>Content: {content}</p>
      <p>Decription: {description}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query ($title: String) {
    currentPage: myPagesJson(title: { eq: $title }) {
      slug
      title
      description
      content
    }
  }
`
