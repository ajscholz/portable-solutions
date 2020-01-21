/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "typeface-kanit"

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"

import Header from "./header"
import Footer from "./footer"
import "../assets/scss/main.scss"
import FAB from "./fab"

const Layout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [ref, inView] = useInView()

  const indexPage = pageContext.layout === "index"
  return (
    <>
      {indexPage === true && <FAB hide={inView} />}
      <Header siteTitle={data.site.siteMetadata.title} indexPage={indexPage} />
      <main>{children}</main>
      <Footer ref={ref} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
