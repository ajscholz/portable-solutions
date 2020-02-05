import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Col, Row, Container, Card } from "reactstrap"
import FABTogglerButton from "../FABTogglerButton"

const ProductSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "4poBxRjdKxbr2Oqf4ahms" }
      ) {
        title
        description {
          description
        }
        otherContent {
          id: contentful_id
          title
          description {
            description
          }
        }
      }
    }
  `)
  return (
    <section className="features-4" id="product">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{section.title}</h2>

            <p className="description">{section.description.description}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {section.otherContent.map(item => (
            <Col md="4" key={item.id}>
              <Card
                className="card-background card-raised"
                data-background-color="blue"
                // style={{
                //   backgroundImage:
                //     "url(" + require("assets/img/bg24.jpg") + ")"
                // }}
              >
                <div className="info">
                  {/* <div className="icon icon-white">
                    <i className="now-ui-icons business_bulb-63"></i>
                  </div> */}
                  <div className="description">
                    <h4 className="info-title mt-3">{item.title}</h4>
                    <p>{item.description.description}</p>
                    <FABTogglerButton
                      className="btn-link"
                      color="success"
                      type="button"
                      size="sm"
                    >
                      <i
                        className="now-ui-icons gestures_tap-01 mr-2"
                        style={{ top: 0 }}
                      />
                      Get Started
                    </FABTogglerButton>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProductSection
