import React, { useEffect, forwardRef } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  CardBody,
  Input,
} from "reactstrap"

const ContactForm = forwardRef((props, ref) => {
  const { formData, update } = props

  return (
    <Form className="form">
      <CardBody>
        <InputGroup
          className="form-group-no-border input-lg"
          onFocus={e => e.currentTarget.classList.add("input-group-focus")}
          onBlur={e => e.currentTarget.classList.remove("input-group-focus")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons users_circle-08"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Name..."
            name="name"
            type="text"
            value={formData.name}
            onChange={e => update(e)}
            innerRef={ref}
          ></Input>
        </InputGroup>

        <InputGroup
          className="form-group-no-border input-lg"
          onFocus={e => e.currentTarget.classList.add("input-group-focus")}
          onBlur={e => e.currentTarget.classList.remove("input-group-focus")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons ui-1_email-85"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email..."
            type="email"
            name="email"
            value={formData.email}
            onChange={e => update(e)}
          ></Input>
        </InputGroup>

        <InputGroup
          className="form-group-no-border input-lg"
          onFocus={e => e.currentTarget.classList.add("input-group-focus")}
          onBlur={e => e.currentTarget.classList.remove("input-group-focus")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons tech_mobile"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Phone..."
            name="phone"
            type="phone"
            value={formData.phone}
            onChange={e => update(e)}
          ></Input>
        </InputGroup>

        <InputGroup
          className="form-group-no-border input-lg"
          onFocus={e => e.currentTarget.classList.add("input-group-focus")}
          onBlur={e => e.currentTarget.classList.remove("input-group-focus")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons business_bank"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Organization Name..."
            type="text"
            name="orgName"
            value={formData.orgName}
            onChange={e => update(e)}
          ></Input>
        </InputGroup>

        <InputGroup
          className="form-group-no-border input-lg mb-0"
          onFocus={e => e.currentTarget.classList.add("input-group-focus")}
          onBlur={e => e.currentTarget.classList.remove("input-group-focus")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons business_globe"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Organization Website..."
            type="text"
            name="orgWebsite"
            value={formData.orgWebsite}
            onChange={e => update(e)}
          ></Input>
        </InputGroup>
      </CardBody>
    </Form>
  )
})

export default ContactForm
