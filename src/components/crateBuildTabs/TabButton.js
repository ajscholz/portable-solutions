import React from "react"
import { NavItem, NavLink } from "reactstrap"

const TabButton = ({ tab, setTab, active, children }) => {
  const navLinkClasses = `mx-2 d-flex flex-grow-1 align-items-center flex-sm-column`
  return (
    <NavItem className="mx-2 mb-2 d-flex">
      <NavLink
        className={active ? navLinkClasses.concat(" active") : navLinkClasses}
        onClick={e => {
          e.preventDefault()
          setTab(tab)
        }}
      >
        {children}
      </NavLink>
    </NavItem>
  )
}

export default TabButton
