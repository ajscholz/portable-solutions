import React from "react"
import PasswordRow from "./PasswordRow"
import { Link } from "gatsby"

const PasswordSection = ({ heading, passwords, link }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <h3 className="mb-3">{heading}</h3>
        <Link className="btn btn-primary my-0 ml-5 mb-3" to={link.to}>
          {link.text}
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
        {passwords.map(crate => (
          <PasswordRow
            key={crate.fields.password}
            crate={crate}
            link={`${link.to}${crate.fields.slug}`}
          />
        ))}
      </div>
    </>
  )
}

export default PasswordSection
