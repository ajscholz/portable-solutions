import React from "react"
import { Button } from "reactstrap"

const ModalButton = props => {
  const { children, type, ...rest } = props
  return (
    <Button
      type={type || "button"}
      block
      className={`btn-neutral d-flex align-items-center justify-content-center text-info`}
      color="default"
      size="lg"
      style={{ width: "100%", opacity: 1 }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ModalButton
