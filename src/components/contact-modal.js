import React from "react"

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
  const { open, toggle } = props

  return (
    <Modal
      className="modal-login modal-fab"
      modalClassName="modal-primary"
      isOpen={open}
      toggle={() => toggle(false)}
    >
      <Card className="card-login card-plain">
        <div className="modal-header justify-content-center">
          <button
            aria-hidden={true}
            className="close"
            type="button"
            onClick={() => toggle(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <div className="header header-primary text-center">
            <div className="logo-container">
              <img alt="..." src={require("../assets/img/now-logo.png")}></img>
            </div>
          </div>
        </div>
        <ModalBody data-background-color="">
          <Form action="" className="form" method="">
            <CardBody>
              <InputGroup className="form-group-no-border input-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="First Name..." type="text"></Input>
              </InputGroup>
              <InputGroup className="form-group-no-border input-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_lock-circle-open"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Password..." type="text"></Input>
              </InputGroup>
            </CardBody>
          </Form>
        </ModalBody>
        <ModalFooter className="text-center">
          <Button
            block
            className="btn-neutral btn-round"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="lg"
          >
            Get Started
          </Button>
        </ModalFooter>
      </Card>
    </Modal>
  )
}

export default ContactModal
