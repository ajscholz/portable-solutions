import React, { useState, useEffect } from "react"

import { Button } from "reactstrap"
import ContactModal from "./contact-modal"

const FAB = props => {
  const { hide } = props
  const [renderButton, setRenderButton] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const fabRef = React.useRef()

  useEffect(() => {
    setTimeout(() => {
      setRenderButton(true)
    }, 7000)
  }, [])

  useEffect(() => {
    if (fabRef.current && hide === true) {
      hideButton()
    } else if (fabRef.current && hide === false) {
      showButton()
    }
  }, [hide])

  console.log(hide)
  console.log(fabRef.current)

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

  // if (renderButton === true && hide === true) {
  //   hideButton()
  // }

  return renderButton ? (
    <>
      <Button
        innerRef={fabRef}
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

      <ContactModal
        open={openForm}
        toggle={setOpenForm}
        hideFab={removeButton}
      />
    </>
  ) : null
}

export default FAB
