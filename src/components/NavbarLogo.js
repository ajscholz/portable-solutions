import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import { NavbarBrand } from "reactstrap"

const NavbarLogo = ({ click, size }) => {
  const { logo } = useStaticQuery(graphql`
    {
      logo: contentfulAsset(title: { eq: "Logo Gray" }) {
        small: fixed(width: 160) {
          ...GatsbyContentfulFixed_withWebp
        }
        large: fixed(width: 200) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  `)

  return (
    <NavbarBrand
      id="navbar-brand"
      tag={Link}
      to="/"
      onClick={e => (click ? click(e, "#") : null)}
      style={{ cursor: "pointer" }}
      className="d-flex align-items-center py-4 m-0"
    >
      <Image
        fixed={logo[size === "lg" ? "large" : "small"]}
        alt="Go to homepage"
      />
    </NavbarBrand>
  )
}

export default NavbarLogo
