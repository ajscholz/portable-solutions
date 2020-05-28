import React, { useRef, useState, useContext } from "react"
import { graphql } from "gatsby"
import { Popover, PopoverBody } from "reactstrap"
import PasswordModal from "../components/PasswordModal"
import { Link } from "gatsby"
import { AdminContext } from "../context/adminContext"

const pStyle = { marginBottom: "0px" }

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
            <h1>PS Admin Page</h1>
            <hr className="my-5" />
            <div className="d-flex align-items-center">
              <h3 className="mb-3">RTA Page Passwords</h3>
              <Link className="btn btn-primary my-0 ml-5 mb-3" to="/rta">
                RTA Crates
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, max-content)",
                columnGap: "2rem",
              }}
            >
              <h5 style={{ textDecoration: "underline", marginBottom: "0" }}>
                Crate Name
              </h5>
              <h5 style={{ textDecoration: "underline", marginBottom: "0" }}>
                Password
              </h5>
              {data.rtaCrates.all.map(crate => (
                <PasswordRow
                  key={crate.fields.password}
                  crate={crate}
                  link={`/rta${crate.fields.slug}`}
                />
              ))}
            </div>
            <hr className="my-5" />
            <div className="d-flex align-items-center">
              <h3>DIY Page Passwords</h3>
              <Link className="btn btn-primary my-0 ml-5 mb-3" to="/diy">
                DIY Crates
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, max-content)",
                columnGap: "2rem",
              }}
            >
              <h5 style={{ textDecoration: "underline", marginBottom: "0" }}>
                Crate Name
              </h5>
              <h5 style={{ textDecoration: "underline", marginBottom: "0" }}>
                Password
              </h5>
              {data.diyCrates.all.map(crate => (
                <PasswordRow
                  key={crate.fields.password}
                  crate={crate}
                  link={`/diy${crate.fields.slug}`}
                />
              ))}
            </div>
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

const PasswordRow = ({ crate, link }) => {
  const [copied, setCopied] = useState(false)

  const password = crate.fields.password
  const rowRef = useRef(password)

  const copyText = () => {
    navigator.clipboard.writeText(rowRef.current).then(() => {
      setCopied(true)
    })
    setTimeout(() => {
      setCopied(false)
    }, 2200)
  }

  return (
    <>
      <div style={{ alignSelf: "center" }}>
        <Link to={link} state={{ admin: true }}>
          <p style={pStyle}>{crate.name}</p>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <p style={pStyle}>{password}</p>
        <button
          id="popover"
          className="btn btn-icon btn-link m-0 p-0 "
          onClick={() => copyText()}
        >
          <i
            className="now-ui-icons files_single-copy-04"
            // style={{ lineHeight: 0 }}
          />
        </button>
        <div>
          <Popover
            placement="right"
            isOpen={copied}
            target="popover"
            className="popover-success"
            hideArrow={true}
          >
            <PopoverBody className="d-flex align-items-center">
              <i className="now-ui-icons ui-1_check mr-2" />
              Copied
            </PopoverBody>
          </Popover>
        </div>
      </div>
    </>
  )
}
