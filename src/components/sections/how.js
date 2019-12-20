import React from "react"

import { Container, Row, Col } from "reactstrap"

const HowSection = props => {
  const { title, otherContent } = props.sectionData

  return (
    <section className="features-6" id="how">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <ol className="big-number-list row">
          {otherContent.map(item => (
            <li key={item.id} className="col-md-6 col-xl-3 mt-4">
              <div className="info info-horizontal pt-0">
                <div className="description">
                  <h5 className="info-title">{item.title}</h5>
                  <p>{item.description.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default HowSection
