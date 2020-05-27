require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Portable Solutions`,
    description: `Helping churches realize maximum potential with portable solutions`,
    siteUrl: `https://portable.solutions`,
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/rta", "/diy", "/admin"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://portable.solutions",
        sitemap: "https://portable.solutions/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/rta", "/diy", "admin", "/404"],
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cache",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portable-solutions`,
        short_name: `portable`,
        start_url: `/`,
        background_color: `#FFFBFC`,
        theme_color: `#424B54`,
        display: `minimal-ui`,
        icon: `src/assets/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
