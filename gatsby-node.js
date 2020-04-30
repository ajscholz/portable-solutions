// add page context for index page
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage)
    createPage(page)
  }
  if (page.path === "/") {
    page.context.layout = "index"
    createPage(page)
  }
}

// create pages
const path = require(`path`)

const slugify = title =>
  `/${title
    .replace(/[ \/]/g, "-")
    .replace(/[\#\?\'\"\&\*\$]+/g, "")
    .toLowerCase()}`

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === "ContentfulCrate") {
    const slug = slugify(node.name)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(`
    {
      page: contentfulPageSection(
        contentful_id: { eq: "5CAr6OxnbXBUutIIizazuv" }
      ) {
        crates: otherContent {
          ... on ContentfulCrate {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while getting ContentfulCrate from graphql.`)
    return
  }
  console.log(result.data.page.crates)
  // Create pages for each crate.
  const cratePageTemplate = path.resolve(`src/templates/crate-template.js`)
  result.data.page.crates.forEach(crate => {
    const path = `/rta${crate.fields.slug}`
    createPage({
      path,
      component: cratePageTemplate,
      context: {
        slug: crate.fields.slug,
      },
    })
  })
}
