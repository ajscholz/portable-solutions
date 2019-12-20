import React from "react"

import { Col, Row, Container } from "reactstrap"

const CrateInfoSection = props => {
  const { title, description, otherContent } = props.sectionData
  return (
    <section className="features-6" id="crate-info">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{title}</h2>

            <h4 className="description">{description.description}</h4>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="info info-horizontal">
              <div className="icon icon-info">
                <i className="now-ui-icons design-2_html5"></i>
              </div>
              <div className="description">
                <h5 className="info-title">{otherContent[0].title}</h5>
                <p>{otherContent[0].description.description}</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-danger">
                <i className="now-ui-icons design_palette"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{otherContent[1].title}</h4>
                <p>{otherContent[1].description.description}</p>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="phone-container">
              <img
                alt="..."
                src={require("../../assets/img/iphone2.png")}
              ></img>
              <small>convert this to gatsby image</small>
            </div>
          </Col>
          <Col md="4">
            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <i className="now-ui-icons design-2_ruler-pencil"></i>
              </div>
              <div className="description">
                <h5 className="info-title">{otherContent[2].title}</h5>
                <p>{otherContent[2].description.description}</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-success">
                <i className="now-ui-icons files_single-copy-04"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{otherContent[3].title}</h4>
                <p>{otherContent[3].description.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CrateInfoSection
