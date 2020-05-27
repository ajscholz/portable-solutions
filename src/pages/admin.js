import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
import { Popover, PopoverBody } from "reactstrap"
import PasswordModal from "../components/PasswordModal"
import { Link } from "gatsby"

const pStyle = { marginBottom: "0px" }

const Admin = ({ data }) => {
  const [login, setLogin] = useState(true)

  return login ? (
    <PasswordModal
      setShowCrates={() => {}}
      showLoginModal={login}
      setShowLoginModal={setLogin}
      headerText="Admin Page Login"
      bodyText=""
    />
  ) : (
    <>
      <div className="w-100 d-flex justify-content-between p-5">
        <div className="mr-5">
          <h1>PS Admin Page</h1>
          <h3>Crate Page Passwords</h3>

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
            {data.crates.all.map(crate => (
              <PasswordRow key={crate.password} crate={crate} />
            ))}
          </div>
        </div>
        <div className="ml-5 d-flex flex-column justify-content-start flex-wrap">
          <Link className="btn btn-lg" to="/rta">
            RTA Crates
          </Link>
          <Link className="btn btn-lg" to="/diy">
            DIY Crates
          </Link>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    crates: allContentfulCrate(
      filter: {
        page_section: {
          elemMatch: { title: { in: ["RTA Crate List", "DIY Guides List"] } }
        }
      }
    ) {
      all: nodes {
        name
        fields {
          password
        }
      }
    }
  }
`

export default Admin

const PasswordRow = ({ crate }) => {
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
        <p style={pStyle}>{crate.name}</p>
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
