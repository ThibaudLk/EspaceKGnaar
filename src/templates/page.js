import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from '../components/layout'

const PageTemplate = ({ data }) => {

  const { title, nom, image } = data.markdownRemark.frontmatter
  const __html = data.markdownRemark.html

  return (
    <Layout>
    <SEO title={title} description={data.markdownRemark.excerpt} />
      La page {nom}
      <h1> {title} </h1>
      {image && (
        <Img style={{ maxHeight: 480 }} fluid={image.childImageSharp.fluid} />
      )}
      <div dangerouslySetInnerHTML={{ __html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
query($slug : String) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        nom
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `

export default PageTemplate