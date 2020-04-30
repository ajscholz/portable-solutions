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
        fixed(width: 165) {
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
      <NavbarReactstrap
        className={"fixed-top bg-white"}
        expand="lg"
        id="navbar"
        style={{ height: "116px" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              tag={Link}
              to="/"
              onClick={e => navigate(e, "#")}
              style={{ cursor: "pointer" }}
            >
              <Image fixed={logo.fixed} alt="Go to homepage" />
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
          </div>

          <Collapse isOpen={collapseOpen} navbar>
            <CloseButton click={closeMenu} className="navbar-toggler" />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#product"
                  onClick={e => navigate(e, "product")}
                >
                  <p>How We Help</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#why"
                  onClick={e => navigate(e, "why")}
                >
                  <p>Why Choose Us?</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#how"
                  onClick={e => navigate(e, "how")}
                >
                  <p>What To Expect</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#crates"
                  onClick={e => navigate(e, "crates")}
                >
                  <p>Our Crates</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/#team"
                  onClick={e => navigate(e, "team")}
                >
                  <p>Our Team</p>
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
