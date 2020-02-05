import React, { useState, createContext } from "react"

const FabContext = createContext([{}, () => {}])

const FabProvider = props => {
  const [fabState, setFabState] = useState({
    renderButton: false,
    slideIntoView: false,
    // showButton: false,
    showForm: false,
  })

  return (
    <FabContext.Provider value={[fabState, setFabState]}>
      {props.children}
    </FabContext.Provider>
  )
}

export { FabContext, FabProvider }
