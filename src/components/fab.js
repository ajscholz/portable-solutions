import React, { useEffect, useRef, useContext } from "react"
import { FabContext } from "../context/fabContext"

import ContactCard from "./ContactCard"
import FABTogglerButton from "./FABTogglerButton"

const FABContainer = () => {
  const buttonRef = useRef()
  const [fabState, setFabState] = useContext(FabContext)

  const slideIntoView = () => {
    const slideTimeout = setTimeout(() => {
      setFabState({ ...fabState, slideIntoView: true })
    }, 2000)
    return () => clearTimeout(slideTimeout)
  }
  const showForm = () => {
    let showTimeout
    if (fabState.slideIntoView === true) {
      showTimeout = setTimeout(() => {
        setFabState({ ...fabState, showForm: true })
      }, 1000)
    }
    return () => clearTimeout(showTimeout)
  }

  useEffect(slideIntoView, [])
  useEffect(showForm, [fabState.slideIntoView, setFabState])

  const handleCloseForm = () => {
    setFabState({ ...fabState, showForm: false })
  }

  return (
    <div
      className={`fab-container bg-info ${fabState.slideIntoView === true &&
        "slide-into-view"} ${fabState.showForm === true && "fab-expand"}`}
      id="fast-action-button"
    >
      <FABTogglerButton
        className={`btn-fab ${
          fabState.showForm === true ? "fade-out move-behind" : "fade-in"
        }`}
        innerRef={buttonRef}
        size="lg"
        color="info"
        type="button"
      >
        <i className="now-ui-icons gestures_tap-01 mr-2" style={{ top: 0 }} />
        Get Started
      </FABTogglerButton>

      <ContactCard
        open={fabState.showForm}
        toggle={handleCloseForm}
        className={`${fabState.showForm === false ? "fade-out" : "fade-in"}`}
        focusOnMount={true}
      />
    </div>
  )
}

export default FABContainer
