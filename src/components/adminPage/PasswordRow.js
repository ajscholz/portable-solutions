import React, { useRef, useState } from "react"
import { Popover, PopoverBody } from "reactstrap"
import { Link } from "gatsby"

const pStyle = { marginBottom: "0px" }

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
          id={`popover-${password}`}
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
            target={`popover-${password}`}
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

export default PasswordRow
