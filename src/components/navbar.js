import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { navigate } from "@reach/router"

import {
  Navbar as NavbarReactstrap,
  Collapse,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Navbar = () => {
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  const [navbarColor, setNavbarColor] = React.useState(
    "bg-white"
    // (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
    //   ? "bg-white"
    //   : // : " navbar-transparent"
    //     " bg-white"
  )

  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 499 ||
  //       document.body.scrollTop > 499
  //     ) {
  //       setNavbarColor("bg-white")
  //     } else if (
  //       document.documentElement.scrollTop < 500 ||
  //       document.body.scrollTop < 500
  //     ) {
  //       // setNavbarColor(" navbar-transparent")
  //       setNavbarColor(" bg-white")
  //     }
  //   }
  //   window.addEventListener("scroll", updateNavbarColor)
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor)
  //   }
  // })

  const { logo } = useStaticQuery(graphql`
    {
      logo: contentfulAsset(title: { eq: "Logo Gray" }) {
        fixed(width: 160) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `)

  const closeMenu = () => {
    document.documentElement.classList.remove("nav-open")
    setCollapseOpen(false)
  }

  return (
    <>
      {collapseOpen ? <div id="bodyClick" onClick={() => closeMenu()} /> : null}
      <NavbarReactstrap
        // className={"fixed-top" + navbarColor}
        className={"fixed-top bg-white"}
        // color="white"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" onClick={() => navigate("#top")}>
              <Image fixed={logo.fixed} alt="Go to homepage" />
              {/* Portable Solutions */}
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open")
                setCollapseOpen(!collapseOpen)
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() => {
                    closeMenu()
                    navigate("#crate-info")
                  }}
                >
                  {/* <i className="now-ui-icons objects_globe"></i> */}
                  <p>Crate Information</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    closeMenu()
                    navigate("#qualifications")
                  }}
                >
                  {/* <i className="now-ui-icons objects_globe"></i> */}
                  <p>Our Qualifications</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </NavbarReactstrap>
    </>
  )
}

export default Navbar
