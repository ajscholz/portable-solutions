import React from "react"
import { Button } from "reactstrap"

const CloseButton = props => {
  const { click, className } = props

  const addedClasses = className ? ` ${className}` : ""
  return (
    <Button
      className={`btn-icon btn-link text-light m-0 position-absolute${addedClasses}`}
      style={{ top: 0, right: 0 }}
      size="lg"
      aria-label="Close"
      onClick={() => click()}
    >
      <i className="now-ui-icons ui-1_simple-remove" />
    </Button>
  )
}

export default CloseButton
