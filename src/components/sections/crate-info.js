import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { Col, Row, Container } from "reactstrap"

const CrateInfoSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "2eVfAiZsaMtqxahL3A6L2a" }
      ) {
        title
        description {
          description
        }
        otherContent {
          title
          description {
            description
          }
        }
        image: foregroundImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <section className="features-6" id="crate-info">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{section.title}</h2>

            <h4 className="description">{section.description.description}</h4>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="info info-horizontal">
              <div className="icon icon-info">
                <i className="now-ui-icons design-2_html5"></i>
              </div>
              <div className="description">
                <h5 className="info-title">{section.otherContent[0].title}</h5>
                <p>{section.otherContent[0].description.description}</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-danger">
                <i className="now-ui-icons design_palette"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{section.otherContent[1].title}</h4>
                <p>{section.otherContent[1].description.description}</p>
              </div>
            </div>
          </Col>

          <Col md="4">
            <Image
              className="phone-container"
              fluid={section.image.fluid}
              imgStyle={{
                objectFit: "contain",
              }}
            />
          </Col>

          <Col md="4">
            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <i className="now-ui-icons design-2_ruler-pencil"></i>
              </div>
              <div className="description">
                <h5 className="info-title">{section.otherContent[2].title}</h5>
                <p>{section.otherContent[2].description.description}</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-success">
                <i className="now-ui-icons files_single-copy-04"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{section.otherContent[3].title}</h4>
                <p>{section.otherContent[3].description.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CrateInfoSection
