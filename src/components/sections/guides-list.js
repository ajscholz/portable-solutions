import React from "react"
import { Col, Row, Container } from "reactstrap"
import CrateGuideCard from "../Crate-Guide-Card"

const GuidesList = props => {
  const { data, guides } = props
  return (
    <section className="features-6">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{data.title}</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          {guides.all.map(card => (
            <Col key={card.id} sm={6} lg={4} xl={3}>
              <CrateGuideCard data={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default GuidesList
