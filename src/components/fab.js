import React, { useState, useEffect } from "react"

import { Button } from "reactstrap"
import ContactModal from "./contact-modal"

const FAB = () => {
  const [showButton, setShowButton] = useState(true)
  const [openForm, setOpenForm] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowButton(true)
  //   }, 2000)
  // })

  return showButton ? (
    <>
      <Button
        id="fast-action-button"
        className="btn-fab slide-in-right"
        size="lg"
        color="primary"
        type="button"
        onClick={() => setOpenForm(true)}
      >
        <i className="now-ui-icons gestures_tap-01 mr-2"></i>
        Get A Custom Quote
      </Button>

      <ContactModal open={openForm} toggle={setOpenForm} />
    </>
  ) : null
}

export default FAB
