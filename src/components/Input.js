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
}) => {
  const [faFocus, setFaFocus] = useState("")
  const inputRef = useRef()
  useEffect(() => {
    if (focusOnMount) {
      inputRef.current.focus()
    }
  }, [focusOnMount])

  const error = errors[name.toLowerCase()]

  return (
    <>
      <InputGroup
        className={`${faFocus} ${error === true ? "has-danger" : ""} ${
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
          type="text"
          invalid={error ? true : false}
          innerRef={e => {
            if (focusOnMount) {
              inputRef.current = e
            }
            register(e, {
              required: "This field is required",
              pattern: errorPattern,
            })
          }}
          onFocus={() => setFaFocus("input-group-focus")}
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
    // <FormGroup
    //   // className="form-group-no-border input-lg"
    //   className={
    //     error
    //       ? "input-lginput-group-focus has-danger "
    //       : faFocus
    //       ? "input-lg input-group-focus"
    //       : "input-lg"
    //   }
    //   // onFocus={e => e.currentTarget.classList.add("input-group-focus")}
    //   // onBlur={e => e.currentTarget.classList.remove("input-group-focus")}
    // >
    //   {/* <InputGroupAddon
    //     addonType="prepend"
    //     className={error && "form-control-danger"}
    //   >
    //     <InputGroupText>
    //       <i className={icon} />
    //     </InputGroupText>
    //   </InputGroupAddon> */}
    //   <Input
    //     className={
    //       error ? "form-control-lg form-control-danger" : "form-control-lg"
    //     }
    //     placeholder={`${placeholder ? placeholder : name}...`}
    //     name={name.toLowerCase()}
    //     invalid={error ? true : false}
    //     innerRef={register({
    //       required: "This field is required",
    //       pattern: errorPattern,
    //     })}
    //     onFocus={() => setFaFocus(true)}
    //     onBlur={() => setFaFocus(false)}
    //   />
    //   <FormFeedback>{error && error.message}</FormFeedback>
    // </FormGroup>
  )
}

export default MyInput

// import React from "react"
// // reactstrap components
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"
// // core components

// function Example() {
//   const [faFocus, setFaFocus] = React.useState("")
//   return (
//     <>
//       <InputGroup className={faFocus}>
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>
//             <i className="fa fa-user-circle"></i>
//           </InputGroupText>
//         </InputGroupAddon>
//         <Input
//           placeholder="Left Font Awesome Icon"
//           type="text"
//           onFocus={() => setFaFocus("input-group-focus")}
//           onBlur={() => setFaFocus("")}
//         ></Input>
//       </InputGroup>
//     </>
//   )
// }

// export default Example
