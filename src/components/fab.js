import React, { useState, useEffect, useRef, useContext } from "react"
import { FabContext } from "../context/fabContext"

import { Button } from "reactstrap"
import ContactCard from "./ContactCard"
import FABTogglerButton from "./FABTogglerButton"

const FABContainer = props => {
  const buttonRef = useRef()
  const [fabState, setFabState] = useContext(FabContext)

  useEffect(() => {
    setTimeout(() => {
      setFabState({ ...fabState, slideIntoView: true })
      setTimeout(() => {
        setFabState({ ...fabState, slideIntoView: true, showForm: true })
      }, 1000)
    }, 2000)
  }, [])

  const handleCloseForm = () => {
    setFabState({ ...fabState, showForm: false })
    buttonRef.current.style.display = "block"
  }

  console.log(fabState)

  return (
    <div
      className={`fab-container bg-success ${fabState.slideIntoView === true &&
        "slide-into-view"} ${fabState.showForm === true && "fab-expand"}`}
      id="fast-action-button"
    >
      <FABTogglerButton
        className={`btn-fab ${
          fabState.showForm === true ? "fade-out" : "fade-in"
        }`}
        innerRef={buttonRef}
        size="lg"
        color="success"
        type="button"
        // style={{ zIndex: fabState.showForm === true ? "-2" : "1" }}
      >
        <i className="now-ui-icons gestures_tap-01 mr-2" style={{ top: 0 }} />
        Get Started
      </FABTogglerButton>

      <ContactCard
        open={fabState.showForm}
        toggle={handleCloseForm}
        className={`${fabState.showForm === false ? "fade-out" : "fade-in"}`}
      />
    </div>
  )
}

export default FABContainer
