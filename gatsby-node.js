exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulCrate implements Node {
      rtaBuildGuide: ContentfulAsset
      diyBuildGuide: ContentfulAsset
    }
  `
  createTypes(typeDefs)
}

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
  } else if (page.path === "/admin") {
    page.context.layout = "admin"
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
    const id = node.contentful_id
    const slug = slugify(node.name)
    const diyPassword = id.substring(0, 6)
    const rtaPassword = id.substring(id.length - 6, id.length)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `diyPassword`,
      value: diyPassword,
    })

    createNodeField({
      node,
      name: `rtaPassword`,
      value: rtaPassword,
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
      rtaCrates: contentfulPageSection(
        contentful_id: { eq: "5CAr6OxnbXBUutIIizazuv" }
      ) {
        all: otherContent {
          ... on ContentfulCrate {
            fields {
              slug
            }
          }
        }
      }
      diyCrates: contentfulPageSection(
        contentful_id: { eq: "4OQhj1IhvqY2xKYQHCM0Q4" }
      ) {
        all: otherContent {
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
  // Create pages for each crate.
  const cratePageTemplate = path.resolve(`src/templates/crate-template.js`)
  result.data.rtaCrates.all.forEach(crate => {
    const path = `/rta${crate.fields.slug}`
    createPage({
      path,
      component: cratePageTemplate,
      context: {
        slug: crate.fields.slug,
        type: "rta",
      },
    })
  })
  result.data.diyCrates.all.forEach(crate => {
    const path = `/diy${crate.fields.slug}`
    createPage({
      path,
      component: cratePageTemplate,
      context: {
        slug: crate.fields.slug,
        type: "diy",
      },
    })
  })
}
