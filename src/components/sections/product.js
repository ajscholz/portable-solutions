import React from "react"

import { Col, Row, Container } from "reactstrap"

const ProductSection = props => {
  const { title, description } = props.sectionData
  return (
    <section className="features-6" id="product">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{title}</h2>

            <h4 className="description">{description.description}</h4>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductSection
