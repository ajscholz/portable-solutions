import React, { useState, useRef, useEffect } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  FormFeedback,
} from "reactstrap"

const MyInput = ({
  placeholder,
  register,
  errors,
  name,
  icon,
  errorPattern,
  noMargin,
  submit,
  focusOnMount = false,
  type,
  required = false,
}) => {
  const [faFocus, setFaFocus] = useState("")
  const inputRef = useRef()
  useEffect(() => {
    if (focusOnMount) {
      inputRef.current.focus()
    }
  }, [focusOnMount])

  const error =
    typeof errors[name.toLowerCase()] === "undefined"
      ? false
      : errors[name.toLowerCase()]

  return (
    <>
      <InputGroup
        className={`${faFocus}${error === true ? "has-danger " : ""}${
          noMargin === true ? "mb-0" : "mb-3"
        }`}
      >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={icon} />
          </InputGroupText>
        </InputGroupAddon>

        <Input
          onKeyDown={e => {
            if (e.keyCode === 13) {
              e.preventDefault()
              submit()
            }
          }}
          className={error && "form-control-danger is-invalid"}
          placeholder={`${placeholder ? placeholder : name}...`}
          name={name.toLowerCase()}
          type={type || "text"}
          invalid={error ? true : false}
          innerRef={e => {
            if (focusOnMount) {
              inputRef.current = e
            }
            register(
              e,
              required
                ? {
                    required: "This field is required",
                    pattern: errorPattern,
                  }
                : {}
            )
          }}
          onFocus={() => setFaFocus("input-group-focus ")}
          onBlur={() => setFaFocus("")}
          style={{
            borderTopRightRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem",
            boxShadow: "none",
          }}
        />
        <FormFeedback tooltip>{error && error.message}</FormFeedback>
      </InputGroup>
    </>
  )
}

export default MyInput
