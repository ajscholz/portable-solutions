import React, { useContext } from "react"
import { graphql } from "gatsby"
import PasswordModal from "../components/PasswordModal"
import { AdminContext } from "../context/adminContext"
import PasswordSection from "../components/adminPage/PasswordSection"

const Admin = ({ data }) => {
  const [loggedIn, setLoggedIn] = useContext(AdminContext)

  return (
    <>
      <PasswordModal
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        headerText="Admin Page Login"
        password="PS-ADMIN"
        bodyText=""
        dismissable={false}
      />
      {loggedIn ? (
        <div className="w-100 p-5">
          <div className="mr-5">
            <h1>Password Dashboard</h1>
            <hr className="my-5" />

            <PasswordSection
              heading="RTA Page Passwords"
              passwords={data.rtaCrates.all}
              link={{ text: "RTA Crates", to: "/rta" }}
            />

            <hr className="my-5" />

            <PasswordSection
              heading="DIY Page Passwords"
              passwords={data.diyCrates.all}
              link={{ text: "DIY Crates", to: "/diy" }}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export const query = graphql`
  {
    rtaCrates: allContentfulCrate(
      filter: {
        page_section: { elemMatch: { title: { eq: "RTA Crate List" } } }
      }
    ) {
      all: nodes {
        name
        fields {
          password: rtaPassword
          slug
        }
      }
    }
    diyCrates: allContentfulCrate(
      filter: {
        page_section: { elemMatch: { title: { eq: "DIY Guides List" } } }
      }
    ) {
      all: nodes {
        name
        fields {
          password: diyPassword
          slug
        }
      }
    }
  }
`

export default Admin
