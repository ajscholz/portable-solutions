import React, { useState } from "react"

export const FabContext = React.createContext()

export const FabProvider = props => {
  const [openForm, setOpenForm] = useState(false)

  return (
    <FabContext.Provider value={[openForm, setOpenForm]}>
      {props.children}
    </FabContext.Provider>
  )
}
