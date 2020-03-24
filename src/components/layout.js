/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "typeface-kanit"

import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"

import Header from "./header"
import Footer from "./footer"
import "../assets/scss/main.scss"
import FABContainer from "./fab"
import { FabContext } from "../context/fabContext"

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

  const [fabState, setFabState] = useContext(FabContext)
  useEffect(() => {
    setTimeout(() => {
      setFabState({ ...fabState, renderButton: true })
    }, 1000)
  }, [fabState, setFabState])

  const indexPage = pageContext.layout === "index"
  return (
    <>
      {indexPage === true ? (
        fabState.renderButton === true ? (
          <FABContainer hide={inView} />
        ) : null
      ) : null}
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
