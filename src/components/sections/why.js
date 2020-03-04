import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ImageOverlay from "../ImageOverlay"

import { Col, Row, Container } from "reactstrap"

const WhySection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "1kzR2f6Y1eXS0Irtj4TUlB" }
      ) {
        title
        backgroundImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
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
    <section id="why" className="features-2 section-image">
      <Image
        fluid={section.backgroundImage.fluid}
        style={{
          height: "100%",
          width: "100%",
          top: "0",
          position: "absolute",
        }}
      />
      <ImageOverlay light />
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
              color = "icon-success"
              icon = "users_single-02"
            } else if (index === 1) {
              color = "icon-success"
              icon = "business_money-coins"
            } else if (index === 2) {
              color = "icon-success"
              icon = "tech_watch-time"
            }

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
