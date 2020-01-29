import React, { useState, useRef, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ContactForm from "./ContactForm"

import { Button, ModalBody, Card, ModalFooter, CardBody } from "reactstrap"
import { FabContext } from "../context/fabContext"

const ContactCard = props => {
  const { toggle, hideFab, ...rest } = props

  const {
    data: { logo },
  } = useStaticQuery(graphql`
    {
      data: contentfulCompanyInformation {
        logo {
          fixed(width: 180) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  `)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orgName: "",
    orgWebsite: "",
  })

  const [isSubmitting, setSubmitting] = useState(false)
  const [accepted, setAccepted] = useState(null)
  const inputRef = useRef()
  const [openForm] = useContext(FabContext)

  console.log(`
  -------------------------------
  ${openForm}
  -------------------------------`)

  const updateField = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    setSubmitting(true)
    e.preventDefault()

    try {
      const response = await fetch("/.netlify/functions/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // siteEmail: siteEmail,
        }),
      })
      const data = await response.json()
      if (response.ok) setAccepted(true)
      else {
        setAccepted(false)
        throw data.msg
      }
    } catch (err) {
      console.log(err)
    }
    setSubmitting(false)
  }

  const Icon = props => (
    <i
      className={`font-weight-bold mb-4 now-ui-icons circle p-4 ${props.className}`}
      style={{ fontSize: "3em" }}
    />
  )

  const ModalButton = props => {
    const { children, type, ...rest } = props
    return (
      <Button
        type={type || "button"}
        block
        className={`btn-neutral d-flex align-items-center justify-content-center text-success ${
          openForm ? "fade-in" : "fade-out"
        }`}
        color="default"
        size="lg"
        style={{ width: "100%", opacity: 0 }}
        {...rest}
      >
        {children}
      </Button>
    )
  }

  return (
    // <div>
    //   <div
    //     className="modal-login modal-fab"
    //     // modalClassName="modal-success"
    //     isOpen={open}
    //     toggle={() => toggle()}
    //     onClosed={() => {
    //       if (accepted) hideFab()
    //     }}
    //     {...rest}
    //     style={{ position: "absolute", bottom: 0, right: 0 }}
    //   >
    <Card
      className="card-login card-plain"
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        height: "556px",
        width: "277px",
        marginBottom: "0",
        zIndex: -1,
      }}
    >
      <div
        className={`bg-white d-flex justify-content-center align-items-center position-relative p-3 ${
          openForm ? "fade-in" : "fade-out"
        }`}
        style={{ height: "140px", width: "100%", top: 0 }}
      >
        <button
          aria-hidden={true}
          className="close text-dark"
          type="button"
          onClick={() => toggle()}
          style={{ right: "12px", top: "10px", position: "absolute" }}
        >
          <i
            className="now-ui-icons ui-1_simple-remove"
            style={{ fontSize: "16px" }}
          />
        </button>
        <Image fixed={logo.fixed} alt="Portable Solutions" />
      </div>
      <ModalBody
        className={`${openForm ? "fade-in" : "fade-out"}`}
        data-background-color=""
      >
        {accepted === null ? (
          <ContactForm
            formData={formData}
            update={updateField}
            ref={inputRef}
          />
        ) : (
          <CardBody style={{ width: "229px", height: "272px", paddingTop: 0 }}>
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              {accepted === true ? (
                <>
                  <Icon className="ui-2_like text-success" />
                  We've received your request and will call you soon to get to
                  know you better and get you a quote.
                </>
              ) : (
                <>
                  <Icon className="travel_info text-warning" />
                  Sorry! There was a problem with your submission. Please try
                  again.
                </>
              )}
            </div>
          </CardBody>
        )}
      </ModalBody>

      <ModalFooter className="text-center border-top-0 pt-0">
        {isSubmitting ? (
          <ModalButton
            type="submit"
            onClick={e => handleSubmit(e)}
            // disabled={
            //   name === "" || email === "" || phone === "" || orgName === ""
            // }
          >
            <i className="now-ui-icons ui-1_settings-gear-63 spin" />
            &nbsp;&nbsp;Sending...
          </ModalButton>
        ) : accepted === true ? (
          <ModalButton onClick={() => toggle()}>
            <i className="now-ui-icons ui-1_simple-remove mr-2"></i>Close
          </ModalButton>
        ) : accepted === false ? (
          <ModalButton onClick={() => setAccepted(null)}>
            <i className="now-ui-icons arrows-1_minimal-left mr-2"></i>Go Back
          </ModalButton>
        ) : (
          <ModalButton onClick={e => handleSubmit(e)} style={{ margin: 0 }}>
            <i className="now-ui-icons ui-1_send mr-2"></i>Let's Roll
          </ModalButton>
        )}
      </ModalFooter>
    </Card>
    //     </div>
    //   </div>
  )
}

export default ContactCard
