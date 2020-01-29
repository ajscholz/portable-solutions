import React, { useContext } from "react"
import { Button } from "reactstrap"
import { FabContext } from "../context/fabContext"

const ThemeTogglerButton = props => {
  const { children, ...rest } = props
  const [, setShowForm] = useContext(FabContext)
  return (
    <Button onClick={() => setShowForm(true)} {...rest}>
      {children}
    </Button>
  )
}

export default ThemeTogglerButton
