import React from "react"

import { Col, Row, Container } from "reactstrap"

const ProductSection = props => {
  const { title, description, otherContent } = props.sectionData
  return (
    <div className="features-1">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">{title}</h2>
            <h4 className="description">{description.description}</h4>
          </Col>
        </Row>
        <Row>
          {otherContent.map((item, index) => {
            // set colors & icons
            let color
            let icon

            if (index === 0) {
              color = "icon-info"
              icon = "ui-2_chat-round"
            } else if (index === 1) {
              color = "icon-success"
              icon = "business_chart-pie-36"
            } else if (index === 2) {
              color = "icon-warning"
              icon = "design-2_ruler-pencil"
            } else return

            return (
              <Col md="4" key={item.id}>
                <div className="info info-hover">
                  <div className={`icon ${color}`}>
                    <i className={`now-ui-icons ${icon}`}></i>
                  </div>
                  <h4 className="info-title">{item.title}</h4>
                  <p className="description">{item.description.description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProductSection
