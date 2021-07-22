//const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

// export is equal to write module.exports
// Node is doing this change internally
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    //const slug = createFilePath({ node, getNode, basePath: `pages` })
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // 2. Get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 3. Create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
