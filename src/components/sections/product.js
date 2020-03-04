import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Col, Row, Container, Card, CardImg, CardImgOverlay } from "reactstrap"
import FABTogglerButton from "../FABTogglerButton"
import Image from "gatsby-image"

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
          backgroundImage {
            fluid {
              ...GatsbyContentfulFluid
            }
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

            <p className="description" style={{ marginBottom: "70px" }}>
              {section.description.description}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {section.otherContent.map(item => (
            <Col lg="4" key={item.id}>
              <Card
                className="card-background card-raised"
                data-background-color="blue"
                style={{
                  marginTop: 0,
                  display: "flex",
                  justifyContent: "center",
                  height: "auto",
                }}
              >
                {/* <CardImg> */}
                <Image
                  fluid={item.backgroundImage.fluid}
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                  }}
                />
                {/* </CardImg> */}
                <div
                  className="info"
                  // style={{ position: "absolute", alignSelf: "center" }}
                >
                  {/* <div className="icon icon-white">
                    <i className="now-ui-icons business_bulb-63"></i>
                  </div> */}
                  <div className="description">
                    <h4 className="info-title mt-3">{item.title}</h4>
                    <p>{item.description.description}</p>
                    <FABTogglerButton
                      className="btn"
                      color="success"
                      type="button"
                      // size="sm"
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
