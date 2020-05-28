import React, { useState } from "react"
import { useForm } from "react-hook-form"
import MyInput from "./Input"

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap"

const PasswordModal = ({
  loggedIn = false,
  setLoggedIn,
  password,
  dismissable,
  headerText = "Login",
  bodyText = "Please enter the password given to you by Portable Solutions, or give us a call to get one.",
}) => {
  const { register, handleSubmit, errors, setError, reset } = useForm()
  const [show, setShow] = useState(!loggedIn)

  const onSubmit = data => {
    if (data.password === password) {
      login()
    } else {
      reset({ errors: true })
      setError("password", "notMatch", "Incorrect Password")
    }
  }

  const hideModal = () => {
    setShow(false)
  }

  const login = () => {
    hideModal()
    setLoggedIn(true)
  }

  return (
    <Modal
      isOpen={show}
      className="modal-login"
      modalClassName="modal-primary"
      centered={true}
      backdrop={dismissable === false ? "static" : true}
      toggle={() => setShow(false)}
    >
      <Card className="card-login card-plain">
        <div className="modal-header justify-content-center">
          <h5
            className="modal-title"
            style={{ textAlign: "left", marginRight: "auto" }}
          >
            {headerText}
          </h5>
          {dismissable === true && (
            <button
              aria-hidden={true}
              className="close h5"
              aria-label="Close"
              type="button"
              onClick={() => hideModal()}
            >
              <i className="now-ui-icons ui-1_simple-remove font-weight-bold"></i>
            </button>
          )}
        </div>
        <ModalBody data-background-color="">
          <p className="mt-3">{bodyText}</p>
          <Form action="" className="form" method="">
            <CardBody className="pb-0 px-0">
              <MyInput
                focusOnMount={true}
                register={register}
                name="Password"
                icon="now-ui-icons ui-1_lock-circle-open"
                errors={errors}
                errorPattern={{
                  value: /^.+$/i,
                  message: "This field is required",
                }}
                noMargin
                submit={handleSubmit(onSubmit)}
              />
            </CardBody>
          </Form>
        </ModalBody>
        <ModalFooter className="flex pb-0">
          <Button
            className="w-100"
            size="lg"
            onClick={handleSubmit(onSubmit)}
            style={{ margin: 0 }}
            disabled={errors.password && true}
          >
            Login
          </Button>
        </ModalFooter>
      </Card>
    </Modal>
  )
}

export default PasswordModal
