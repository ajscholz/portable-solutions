import React, { useState, useEffect } from "react"

import { Button } from "reactstrap"
import ContactCard from "./ContactCard"

const FAB = props => {
  const { hide } = props
  const [renderButton, setRenderButton] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const fabRef = React.useRef()
  const buttonRef = React.useRef()

  useEffect(() => {
    setTimeout(() => {
      setRenderButton(true)
      setTimeout(() => {
        handleOpenForm()
      }, 500)
    }, 5000)
  }, [])

  useEffect(() => {
    if (fabRef.current && hide === true) {
      hideButton()
    } else if (fabRef.current && hide === false) {
      showButton()
    }
  }, [hide])

  const showButton = () => {
    fabRef.current.classList.replace("slide-out-right", "slide-in-right")
  }

  const hideButton = () => {
    fabRef.current.classList.replace("slide-in-right", "slide-out-right")
  }

  const removeButton = () => {
    hideButton()
    setTimeout(() => {
      setRenderButton(false)
    }, 1000)
  }

  const handleOpenForm = () => {
    buttonRef.current.classList.replace("fade-in", "fade-out")
    fabRef.current.classList.add("btn-expand-out")
    fabRef.current.classList.remove("btn-shrink-in")
    setTimeout(() => {
      setOpenForm(true)
    }, 375)
    setTimeout(() => {
      buttonRef.current.style.display = "none"
    }, 750)
  }

  const handleCloseForm = () => {
    // buttonRef.current.style.opacity = 0
    setOpenForm(false)
    fabRef.current.classList.replace("btn-expand-out", "btn-shrink-in")
    setTimeout(() => {
      buttonRef.current.style.display = "block"
      buttonRef.current.classList.replace("fade-out", "fade-in")
    }, 375)
  }

  // if (renderButton === true && hide === true) {
  //   hideButton()
  // }

  return renderButton ? (
    <div
      className="fab-container slide-in-right bg-success"
      ref={fabRef}
      id="fast-action-button"
      style={{
        borderRadius: "4px",
        zIndex: 1050,
        overflow: "hidden",
        minHeight: "48px",
        minWidth: "190.17px",
      }}
    >
      <Button
        className="btn-fab fade-in"
        size="lg"
        color="success"
        type="button"
        onClick={e => handleOpenForm(e)}
        innerRef={buttonRef}
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          right: 0,
          opacity: 0,
        }}
      >
        <i className="now-ui-icons gestures_tap-01 mr-2" style={{ top: 0 }} />
        Get Started
      </Button>

      <ContactCard
        open={openForm}
        toggle={handleCloseForm}
        hideFab={removeButton}
        style={{ zIndex: 0 }}
      />
    </div>
  ) : null
}

export default FAB
