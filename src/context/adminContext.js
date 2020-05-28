import React, { useState, createContext } from "react"

const AdminContext = createContext([{}, () => {}])

const AdminProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <AdminContext.Provider value={[loggedIn, setLoggedIn]}>
      {props.children}
    </AdminContext.Provider>
  )
}

export { AdminContext, AdminProvider }
