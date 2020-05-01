import React from "react"

import { Navbar as NavbarReactstrap, Container } from "reactstrap"
import NavbarLogo from "./NavbarLogo"

const SimpleNavbar = () => {
  return (
    <>
      <NavbarReactstrap className={"fixed-top bg-white"} id="navbar">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <NavbarLogo />
          </div>
        </Container>
      </NavbarReactstrap>
    </>
  )
}

export default SimpleNavbar
