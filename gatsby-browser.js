/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const smoothscroll = require("smoothscroll-polyfill")
const { FabProvider } = require("./src/context/fabContext")
const { AdminProvider } = require("./src/context/adminContext")

exports.onClientEntry = () => {
  smoothscroll.polyfill()

  if (typeof window !== "undefined") {
    const admin =
      window.localStorage.getItem("admin") === "true" ? "true" : "false"
    window.localStorage.setItem("admin", admin)
  }
}

exports.wrapRootElement = ({ element }) => {
  return (
    <FabProvider>
      <AdminProvider>{element}</AdminProvider>
    </FabProvider>
  )
}
