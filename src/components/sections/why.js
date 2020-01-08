import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Col, Row, Container } from "reactstrap"

const WhySection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "1kzR2f6Y1eXS0Irtj4TUlB" }
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
    <section
      id="why"
      className="features-2 section-image"
      style={{
        backgroundImage: "url(" + require("../../assets/img/bg22.jpg") + ")",
      }}
    >
      <Container fluid>
        <Row>
          <Col className="mr-auto ml-auto" md="8">
            <h2 className="title">{section.title}</h2>
            <h4 className="description">{section.description.description}</h4>
          </Col>
        </Row>
        <Row>
          {section.otherContent.map((item, index) => {
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
                <div className="info ">
                  <div className={`icon ${color} icon-circle`}>
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
    </section>
  )
}

export default WhySection
