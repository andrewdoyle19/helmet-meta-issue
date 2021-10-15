const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({
  graphql,
  actions
}) => {
  const { createPage } = actions
  const storyTemplate = path.resolve("src/templates/page-template.js")
  
  return new Promise((resolve, reject) => {
      graphql(`
      {
        allMyPagesJson {
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
    `).then(result => {
        console.log("result", JSON.stringify(result))
        result.data.allMyPagesJson.edges.forEach(({
          node
        }) => {
          createPage({
            path: node.slug,
            component: storyTemplate,
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.slug,
              title: node.title
            }
          })
        })
        resolve()
      })
    })
    .catch(error => {
      console.log(error)
    })
}
