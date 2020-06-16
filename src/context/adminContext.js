import React, { useState, createContext } from "react"

const AdminContext = createContext([{}, () => {}])

const AdminProvider = props => {
  const admin =
    typeof window !== "undefined"
      ? window.localStorage.getItem("admin") === "true"
        ? true
        : false
      : false

  const [loggedIn, setLoggedIn] = useState(admin)

  const set = () => {
    if (window.localStorage !== "undefined") {
      window.localStorage.setItem("admin", "true")
    }
    setLoggedIn(true)
  }

  return (
    <AdminContext.Provider value={[loggedIn, set]}>
      {props.children}
    </AdminContext.Provider>
  )
}

export { AdminContext, AdminProvider }
