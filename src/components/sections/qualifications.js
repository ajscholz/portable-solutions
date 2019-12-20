import React from "react"
import Image from "gatsby-image"

import { Container, Row, Col } from "reactstrap"

const QualificationsSection = props => {
  const {
    backgroundImage,
    title,
    description,
    otherContent,
    foregroundImage,
  } = props.sectionData

  return (
    <section style={{ position: "relative" }} id="qualifications">
      <Image
        className="section-image position-absolute"
        style={{ height: "100%" }}
        fluid={backgroundImage.fluid}
      />

      <div className="features-7 section-image position-relative">
        <Col className="mr-auto ml-auto text-center" md="8">
          <h2 className="title">{title}</h2>
          <h4 className="description">{description.description}</h4>
        </Col>
        <Container fluid>
          <Row>
            <Col className="px-0" md="6">
              <Col sm="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">{otherContent[0].title}</h5>
                    <p className="description">
                      {otherContent[0].description.description}
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">{otherContent[1].title}</h5>
                    <p className="description">
                      {otherContent[1].description.description}
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">{otherContent[2].title}</h5>
                    <p className="description">
                      {otherContent[2].description.description}
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md="6">
              {/* <div className="image-container">
                  <img alt="..." src={require("../assets/img/ipad3.png")}></img>
                  <Image fluid={foregroundImage.fluid} />
                </div> */}
              <Image
                className="image-container"
                fluid={foregroundImage.fluid}
                imgStyle={{
                  objectPosition: "left center",
                  objectFit: "none",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default QualificationsSection
