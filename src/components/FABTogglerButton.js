import React, { useContext } from "react"
import { Button } from "reactstrap"
import { FabContext } from "../context/fabContext"

const FABTogglerButton = props => {
  const { children, className, ...rest } = props
  const [fabState, setFabState] = useContext(FabContext)
  return fabState.renderButton ? (
    <Button
      onClick={() => setFabState({ ...fabState, showForm: true })}
      {...rest}
      className={`btn ${className}`}
    >
      {children}
    </Button>
  ) : null
}

export default FABTogglerButton
