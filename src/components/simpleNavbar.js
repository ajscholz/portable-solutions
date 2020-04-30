import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

import {
  Navbar as NavbarReactstrap,
  Container,
  NavbarBrand,
  NavLink,
} from "reactstrap"

const SimpleNavbar = () => {
  const { logo } = useStaticQuery(graphql`
    {
      logo: contentfulAsset(title: { eq: "Logo Gray" }) {
        fixed(width: 200) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `)

  return (
    <>
      <NavbarReactstrap className={"fixed-top bg-white"} id="navbar">
        <Container>
          <div
            className="navbar-translate "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "106px",
            }}
          >
            <NavbarBrand
              id="navbar-brand"
              tag={Link}
              to="/"
              style={{ cursor: "pointer", marginRight: "0" }}
            >
              <Image fixed={logo.fixed} alt="Go to homepage" />
              {/* Portable Solutions */}
            </NavbarBrand>
          </div>
        </Container>
      </NavbarReactstrap>
    </>
  )
}

export default SimpleNavbar
