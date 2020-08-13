import React, { useState, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { ModalBody, Card, ModalFooter, CardBody, Form } from "reactstrap"

import MyInput from "./Input"
import { useForm } from "react-hook-form"
import { FabContext } from "../context/fabContext"
import ModalButton from "./ModalButton"

const Form2 = props => {
  const { toggle, className, fab, focusOnMount } = props

  const formStyle =
    fab === false
      ? { position: "relative", zIndex: 10, width: "100%", height: "auto" }
      : {}

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

  const [isSubmitting, setSubmitting] = useState(false)
  const [accepted, setAccepted] = useState(null)
  const [fabState, setFabState] = useContext(FabContext)

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    console.log("handling submit")
    console.log(errors)
    // console.log(data)

    const formData = data
    setSubmitting(true)
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
      if (response.ok) {
        setAccepted(true)
        if (fab === false) {
          setFabState({ ...fabState, slideIntoView: false })
          setTimeout(() => {
            setFabState({
              ...fabState,
              renderButton: false,
              slideIntoView: false,
            })
          }, 750)
        }
      } else {
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

  return (
    <Card
      className={`card-login card-plain fab-card ${className}`}
      style={formStyle}
    >
      {fab !== false && (
        <div
          className={`bg-white d-flex justify-content-center align-items-center position-relative p-3 `}
          style={{ height: "140px", width: "100%", top: 0 }}
        >
          {!accepted && (
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
          )}
          <Image fixed={logo.fixed} alt="Portable Solutions" />
        </div>
      )}
      <ModalBody
        // className={`${fabContext.showForm === true ? "fade-in" : "fade-out"}`}
        data-background-color="info"
        className="py-0"
      >
        {accepted === null ? (
          // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
          <Form className="form">
            <CardBody className="pb-0">
              {/* NAME INPUT */}
              <MyInput
                register={register}
                name="Name"
                errors={errors}
                icon="now-ui-icons users_circle-08"
                required={true}
                errorPattern={{
                  value: /^[a-z]{1,} [a-z]{1,}$/i,
                  message: "Please enter a valid first and last name",
                }}
                submit={handleSubmit(onSubmit)}
                focusOnMount={focusOnMount}
              />
              {/* EMAIL INPUT */}
              <MyInput
                register={register}
                name="Email"
                errors={errors}
                icon="now-ui-icons ui-1_email-85"
                required={true}
                errorPattern={{
                  value: /^[a-z1-9]{3,}@[a-z1-9]{2,}.[a-z1-9]{2,}$/i,
                  message: "Please enter a valid email address",
                }}
                submit={handleSubmit(onSubmit)}
              />
              {/* PHONE INPUT */}
              <MyInput
                register={register}
                name="Phone"
                errors={errors}
                icon="now-ui-icons tech_mobile"
                required={true}
                errorPattern={{
                  value: /^[0-9]{10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$|^\([0-9]{3}\) {0,1}[0-9]{3}[- ]{0,1}[0-9]{4}$/,
                  message: "Please enter a valid phone number",
                }}
                submit={handleSubmit(onSubmit)}
              />
              {/* ORGANIZATION NAME INPUT */}
              <MyInput
                register={register}
                name="orgname"
                placeholder="Organization Name"
                errors={errors}
                icon="now-ui-icons business_bank"
                required={true}
                errorPattern={{
                  value: /^.{3,}$/i,
                  message: "Please enter a valid name",
                }}
                submit={handleSubmit(onSubmit)}
              />
              {/* ORGANIZATION WEBSITE INPUT */}
              <MyInput
                register={register}
                placeholder="Organization Website"
                name="orgweb"
                errors={errors}
                icon="now-ui-icons business_globe"
                errorPattern={{
                  value: /[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,}$/,
                  message: "Please enter a valid website",
                }}
                submit={handleSubmit(onSubmit)}
              />
              <MyInput
                register={register}
                placeholder="Message..."
                name="message"
                rows="3"
                icon="now-ui-icons ui-2_chat-round"
                errors={errors}
                submit={handleSubmit(onSubmit)}
                type="textarea"
              />

              {/* <FormFeedback valid={!errors.help}>
                This field is required. Please enter a valid message.
              </FormFeedback> */}
              {/* errors will return when field validation fails  */}
            </CardBody>
          </Form>
        ) : (
          <CardBody style={{ width: "100%", height: "100%", paddingTop: 0 }}>
            <div
              className="d-flex flex-column align-items-center justify-content-center h-100 w-100 text-center"
              style={{ margin: "0 auto", maxWidth: "250px" }}
            >
              {accepted === true ? (
                <>
                  <Icon className="ui-2_like text-info" />
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

      <ModalFooter
        className="text-center border-top-0 pt-0"
        style={{ marginTop: "auto" }}
      >
        {isSubmitting ? (
          <ModalButton style={{ margin: 0 }}>
            <i className="now-ui-icons ui-1_settings-gear-63 spin" />
            &nbsp;&nbsp;Sending...
          </ModalButton>
        ) : accepted === true ? (
          fab !== false && (
            <ModalButton
              style={{ margin: 0 }}
              onClick={() => {
                setFabState({ ...fabState, slideIntoView: false })
                setTimeout(() => {
                  setFabState({
                    ...fabState,
                    renderButton: false,
                    slideIntoView: false,
                  })
                }, 750)
              }}
            >
              <i className="now-ui-icons ui-1_simple-remove mr-2"></i>Close
            </ModalButton>
          )
        ) : accepted === false ? (
          <ModalButton onClick={() => setAccepted(null)} style={{ margin: 0 }}>
            <i className="now-ui-icons arrows-1_minimal-left mr-2"></i>Go Back
          </ModalButton>
        ) : (
          <ModalButton onClick={handleSubmit(onSubmit)} style={{ margin: 0 }}>
            <i className="now-ui-icons ui-1_send mr-2"></i>Let's Roll
          </ModalButton>
        )}
      </ModalFooter>
    </Card>
  )
}

export default Form2
