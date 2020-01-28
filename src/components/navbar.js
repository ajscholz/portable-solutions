import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import CloseButton from "./CloseButton"

import {
  Navbar as NavbarReactstrap,
  Collapse,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Navbar = ({ indexPage }) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  // const [navbarColor, setNavbarColor] = React.useState(
  //   "bg-white"
  // (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //   ? "bg-white"
  //   : // : " navbar-transparent"
  //     " bg-white"
  // )

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

  let navHeight = useRef()

  useEffect(() => {
    navHeight.current = document.getElementById("navbar").clientHeight
  }, [navHeight])

  const navigate = (e, element) => {
    if (indexPage === true) {
      e.preventDefault()
      scrollToSection(e, element)
    }
    closeMenu()
  }

  const scrollToSection = (e, element) => {
    e.preventDefault()

    if (typeof element === "number") {
      window.scrollBy({ left: 0, top: -element })
      return
    }

    const node = document.getElementById(element)
    const scrollTo = node.getBoundingClientRect().top - navHeight.current
    if (typeof "window" !== undefined) {
      window.scrollBy({ left: 0, top: scrollTo, behavior: "smooth" })
    }
  }

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
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => closeMenu()}
          onKeyDown={e => {
            if (e.key === "Escape") {
              closeMenu()
            }
          }}
        />
      ) : null}
      <NavbarReactstrap
        // className={"fixed-top" + navbarColor}
        className={"fixed-top bg-white"}
        // color="white"
        expand="lg"
        id="navbar"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              // onClick={e => {
              //   e.preventDefault()
              //   scrollToSection(e, 0)
              //   closeMenu()
              // }}
              style={{ cursor: "pointer" }}
            >
              <NavLink tag={Link} to="/" onClick={e => navigate(e, "#")}>
                <Image fixed={logo.fixed} alt="Go to homepage" />
              </NavLink>
              {/* Portable Solutions */}
            </NavbarBrand>
            <button
              style={{ marginLeft: "auto", width: "unset", padding: 0 }}
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
            {/* <button
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
            </button> */}
          </div>

          <Collapse isOpen={collapseOpen} navbar>
            <CloseButton click={closeMenu} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#product"
                  onClick={e => navigate(e, "product")}
                >
                  <p>Product</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#why"
                  onClick={e => navigate(e, "why")}
                >
                  <p>Why</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#how"
                  onClick={e => navigate(e, "how")}
                >
                  <p>How</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#crate-info"
                  onClick={e => navigate(e, "crate-info")}
                >
                  <p>Crates</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#qualifications"
                  onClick={e => navigate(e, "qualifications")}
                >
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
