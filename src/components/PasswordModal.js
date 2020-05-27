import React from "react"
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

const password = process.env.DIY_PASSWORD

const PasswordModal = ({
  showLoginModal,
  setShowLoginModal,
  setShowCrates,
}) => {
  const { register, handleSubmit, errors, setError, reset } = useForm()

  const onSubmit = data => {
    if (data.password === password) {
      setShowLoginModal(false)
      setShowCrates()
    } else {
      reset({ errors: true })
      setError("password", "notMatch", "Incorrect Password")
    }
  }

  return (
    <Modal
      isOpen={showLoginModal}
      className="modal-login m-0"
      modalClassName="modal-primary d-flex align-items-center justify-content-center"
      toggle={() => setShowLoginModal(false)}
    >
      <Card className="card-login card-plain">
        <div className="modal-header justify-content-center">
          <h5
            className="modal-title"
            style={{ textAlign: "left", marginRight: "auto" }}
          >
            DIY Guides Login
          </h5>
          <button
            aria-hidden={true}
            className="close h5"
            aria-label="Close"
            type="button"
            onClick={() => setShowLoginModal(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove font-weight-bold"></i>
          </button>
        </div>
        <ModalBody data-background-color="">
          <p className="mt-3">
            Please enter the password given to you by Portable Solutions, or{" "}
            <a href="tel:614-569-0307">give us a call</a> to get one.
          </p>
          <Form action="" className="form" method="">
            <CardBody className="pb-0 px-0">
              <MyInput
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
            rounded
            className="w-100"
            size="lg"
            onClick={handleSubmit(onSubmit)}
            style={{ margin: 0 }}
            disabled={errors.password}
          >
            Login
          </Button>
        </ModalFooter>
      </Card>
    </Modal>
  )
}

export default PasswordModal