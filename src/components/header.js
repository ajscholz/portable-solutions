import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import SimpleNavbar from "./simpleNavbar"

const Header = ({ siteTitle, indexPage }) => (
  <header>
    {indexPage === true ? (
      <Navbar siteTitle={siteTitle} indexPage={indexPage} />
    ) : (
      <SimpleNavbar />
    )}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
