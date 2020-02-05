/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const smoothscroll = require("smoothscroll-polyfill")
const { FabProvider } = require("./src/context/fabContext")

exports.onClientEntry = () => {
  smoothscroll.polyfill()
}

exports.wrapRootElement = ({ element }) => {
  return <FabProvider>{element}</FabProvider>
}
