import React from 'react'
import Layout from '../components/layout'

const PageTemplate = ({ data }) => {

  const { nom } = data.markdownRemark.frontmatter

  return (
    <Layout>
      La page {nom}
    </Layout>
  )
}

export const pageQuery = graphql`
query($slug : String) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        nom
      }
    }
  }
  `

export default PageTemplate