import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap"

const ContactPage = props => {
  const { data } = props
  const { banner } = data.page

  const [first1Focus, setFirst1Focus] = React.useState(false)
  const [last1Focus, setLast1Focus] = React.useState(false)
  const [email1Focus, setEmail1Focus] = React.useState(false)

  return (
    <>
      <SEO title={data.page.title} />
      <Banner data={banner} small={true} />

      <div className="cd-section" id="contact-us">
        <Container style={{ padding: "80px 0" }}>
          <h4
            className="description"
            style={{ textAlign: "center", marginBottom: "3em" }}
          >
            Do you want more information? Send a message or give us a call now!
          </h4>
          <Row>
            <Col md="6">
              <div className="info info-horizontal pt-4">
                <div className="icon icon-info">
                  <i className="now-ui-icons tech_mobile"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p className="description">
                    (123) 456-7890 <br></br>
                    Mon-Fri 8a - 5p
                  </p>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto pt-4" md="6">
              <Card className="card-contact card-raised">
                <Form id="contact-form1" method="post" role="form">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4" style={{ marginTop: "25px" }}>
                      Send A Message
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="pr-2" md="6">
                        <label>First name</label>
                        <InputGroup
                          className={first1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="First Name..."
                            autoComplete="given-name"
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirst1Focus(true)}
                            onBlur={() => setFirst1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2" md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={last1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons text_caps-small"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              autoComplete="family-name"
                              placeholder="Last Name..."
                              type="text"
                              onFocus={() => setLast1Focus(true)}
                              onBlur={() => setLast1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={email1Focus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="email"
                          placeholder="Email Here..."
                          type="email"
                          onFocus={() => setEmail1Focus(true)}
                          onBlur={() => setEmail1Focus(false)}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            I'm not a robot
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button
                          className="btn-round pull-right"
                          color="info"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Contact" }) {
      title
      banner {
        heading
        image: backgroundImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      sections {
        ... on ContentfulInfo {
          title
          description {
            description
          }
        }
      }
    }
  }
`

export default ContactPage
