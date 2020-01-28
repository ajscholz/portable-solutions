import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import {
  Button,
  Modal,
  ModalBody,
  Card,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  ModalFooter,
  CardBody,
  Input,
} from "reactstrap"

const ContactModal = props => {
  const { open, toggle, hideFab } = props

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

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [orgName, setOrgName] = useState("")
  const [orgWebsite, setOrgWebsite] = useState("")

  const [isSubmitting, setSubmitting] = useState(false)
  const [accepted, setAccepted] = useState(null)

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
          name: name,
          email: email,
          phone: phone,
          orgName: orgName,
          orgWebsite: orgWebsite,
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
        className="btn-neutral d-flex align-items-center justify-content-center"
        color="default"
        size="lg"
        style={{ width: "100%" }}
        {...rest}
      >
        {children}
      </Button>
    )
  }

  return (
    <Modal
      className="modal-login modal-fab"
      modalClassName="modal-info"
      isOpen={open}
      toggle={() => toggle(false)}
      onClosed={() => {
        if (accepted) hideFab()
      }}
    >
      <Card className="card-login card-plain">
        <div className="modal-header bg-white justify-content-center">
          <button
            aria-hidden={true}
            className="close text-dark"
            type="button"
            onClick={() => toggle(false)}
            style={{ right: "12px", top: "10px" }}
          >
            <i
              className="now-ui-icons ui-1_simple-remove"
              style={{ fontSize: "16px" }}
            ></i>
          </button>
          <div
            className="logo-container mx-auto d-flex justify-content-center"
            style={{ width: "100%" }}
          >
            <Image fixed={logo.fixed} alt="Portable Solutions" />
            {/* <img alt="..." src={require("../assets/img/now-logo.png")}></img> */}
          </div>
        </div>
        <ModalBody data-background-color="">
          {accepted === null ? (
            <Form className="form">
              <CardBody>
                <InputGroup
                  className="form-group-no-border input-lg"
                  onFocus={e =>
                    e.currentTarget.classList.add("input-group-focus")
                  }
                  onBlur={e =>
                    e.currentTarget.classList.remove("input-group-focus")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name..."
                    type="text"
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                  ></Input>
                </InputGroup>

                <InputGroup
                  className="form-group-no-border input-lg"
                  onFocus={e =>
                    e.currentTarget.classList.add("input-group-focus")
                  }
                  onBlur={e =>
                    e.currentTarget.classList.remove("input-group-focus")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                  ></Input>
                </InputGroup>

                <InputGroup
                  className="form-group-no-border input-lg"
                  onFocus={e =>
                    e.currentTarget.classList.add("input-group-focus")
                  }
                  onBlur={e =>
                    e.currentTarget.classList.remove("input-group-focus")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons tech_mobile"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Phone..."
                    type="phone"
                    value={phone}
                    onChange={e => setPhone(e.currentTarget.value)}
                  ></Input>
                </InputGroup>

                <InputGroup
                  className="form-group-no-border input-lg"
                  onFocus={e =>
                    e.currentTarget.classList.add("input-group-focus")
                  }
                  onBlur={e =>
                    e.currentTarget.classList.remove("input-group-focus")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons business_bank"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Organization Name..."
                    type="text"
                    value={orgName}
                    onChange={e => setOrgName(e.currentTarget.value)}
                  ></Input>
                </InputGroup>

                <InputGroup
                  className="form-group-no-border input-lg"
                  onFocus={e =>
                    e.currentTarget.classList.add("input-group-focus")
                  }
                  onBlur={e =>
                    e.currentTarget.classList.remove("input-group-focus")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons business_globe"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Organization Website..."
                    type="text"
                    value={orgWebsite}
                    onChange={e => setOrgWebsite(e.currentTarget.value)}
                  ></Input>
                </InputGroup>
              </CardBody>
            </Form>
          ) : (
            <CardBody style={{ width: "229px", height: "272px" }}>
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

        <ModalFooter className="text-center pb-0">
          {isSubmitting ? (
            <ModalButton
              type="submit"
              onClick={e => handleSubmit(e)}
              disabled={
                name === "" || email === "" || phone === "" || orgName === ""
              }
            >
              <i className="now-ui-icons ui-1_settings-gear-63 spin" />
              &nbsp;&nbsp;Sending...
            </ModalButton>
          ) : accepted === true ? (
            <ModalButton onClick={() => toggle(false)}>
              <i className="now-ui-icons ui-1_simple-remove mr-2"></i>Close
            </ModalButton>
          ) : accepted === false ? (
            <ModalButton onClick={() => setAccepted(null)}>
              <i className="now-ui-icons arrows-1_minimal-left mr-2"></i>Go Back
            </ModalButton>
          ) : (
            <ModalButton onClick={e => handleSubmit(e)}>
              <i className="now-ui-icons ui-1_send mr-2"></i>Get My Quote
            </ModalButton>
          )}
        </ModalFooter>
      </Card>
    </Modal>
  )
}

export default ContactModal
