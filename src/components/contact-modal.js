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

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(
      "form submission recorded: ",
      "name: ",
      name,
      "email: ",
      email,
      "phone: ",
      phone,
      "orgName: ",
      orgName
    )

    // hide the fab
    setSubmitted(true)
    toggle(false)
  }

  return (
    <Modal
      className="modal-login modal-fab"
      modalClassName="modal-info"
      isOpen={open}
      toggle={() => toggle(false)}
      onClosed={() => {
        if (submitted) hideFab()
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
            </CardBody>
          </Form>
        </ModalBody>

        <ModalFooter className="text-center pb-0">
          <Button
            block
            className="btn-neutral d-flex align-items-center justify-content-center"
            color="default"
            onClick={e => handleSubmit(e)}
            size="lg"
            style={{ width: "100%" }}
          >
            <i className="now-ui-icons ui-1_send mr-2"></i>Get My Quote
          </Button>
        </ModalFooter>
      </Card>
    </Modal>
  )
}

export default ContactModal
