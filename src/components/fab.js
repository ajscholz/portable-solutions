import React, { useState, useEffect } from "react"

import { Button } from "reactstrap"
import ContactModal from "./contact-modal"

const FAB = () => {
  const [showButton, setShowButton] = useState(false)
  const [openForm, setOpenForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 5000)
  }, [])

  const hideButton = () => {
    document
      .getElementById("fast-action-button")
      .classList.replace("slide-in-right", "slide-out-right")
    setTimeout(() => {
      setShowButton(false)
    }, 1000)
  }

  return showButton ? (
    <>
      <Button
        id="fast-action-button"
        className="btn-fab slide-in-right"
        size="lg"
        color="info"
        type="button"
        onClick={() => setOpenForm(true)}
      >
        <i className="now-ui-icons gestures_tap-01 mr-2"></i>
        Get A Custom Quote
      </Button>

      <ContactModal open={openForm} toggle={setOpenForm} hideFab={hideButton} />
    </>
  ) : null
}

export default FAB
