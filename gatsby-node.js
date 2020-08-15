// Ce fichier permet de générer les pages au build de Gatsby
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  // fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  const pagesQuery = graphql(`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/mdPages/*.md" } }
      ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`).then(result => {
console.log(JSON.stringify(result, null, 2))
const pages = result.data.allMarkdownRemark.edges

pages.forEach((post) => {

  createPage({
    path: post.node.fields.slug,
    component: pageTemplate,
    context: {
      slug: post.node.fields.slug,
    },
  })
})
})

return Promise.all([pagesQuery]);

}