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
      <div class="container is-widescreen">
        La page {nom}
        <h1 className="title"> {title} </h1>
        <img src={image} alt={image} />
        {/* {image && (
        <Img style={{ maxHeight: 480 }} fluid={image.childImageSharp.fluid} />
      )} */}
        <div dangerouslySetInnerHTML={{ __html }} />
      </div>
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
        image
      }
    }
  }
  `

export default PageTemplate