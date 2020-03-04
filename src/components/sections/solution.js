import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { Col, Row, Container } from "reactstrap"

const OurSolutionSection = () => {
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
          id: contentful_id
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

  // if length === 3 then this will return "2"
  // const splitHalf = Math.ceil(section.otherContent.length / 2)

  // const leftColumnContent = section.otherContent.slice(0, splitHalf)
  // const rightColumnContent = section.otherContent.slice(splitHalf)

  const leftColumnContent = section.otherContent.slice(0, 2)
  const rightColumnContent = section.otherContent.slice(2, 4)
  const bottomContent = section.otherContent.slice(4, 5)

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
          <Col lg="4">
            {leftColumnContent.map(item => {
              return (
                <div className="info info-horizontal" key={item.id}>
                  {/* <div className="icon icon-info">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div> */}
                  <div className="description">
                    <h5 className="info-title">{item.title}</h5>
                    <p>{item.description.description}</p>
                  </div>
                </div>
              )
            })}
            {/* <div className="info info-horizontal">
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
            <div className="info info-horizontal">
              <div className="icon icon-danger">
                <i className="now-ui-icons design_palette"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{section.otherContent[2].title}</h4>
                <p>{section.otherContent[2].description.description}</p>
              </div>
            </div> */}
          </Col>

          <Col
            lg="4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              className="phone-container"
              fluid={section.image.fluid}
              style={{ width: "100%" }}
              imgStyle={{
                objectFit: "contain",
              }}
            />
          </Col>

          <Col lg="4">
            {rightColumnContent.map(item => {
              return (
                <div className="info info-horizontal" key={item.id}>
                  {/* <div className="icon icon-info">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div> */}
                  <div className="description">
                    <h5 className="info-title">{item.title}</h5>
                    <p>{item.description.description}</p>
                  </div>
                </div>
              )
            })}
            {/* <div className="info info-horizontal">
              <div className="icon icon-primary">
                <i className="now-ui-icons design-2_ruler-pencil"></i>
              </div>
              <div className="description">
                <h5 className="info-title">{section.otherContent[3].title}</h5>
                <p>{section.otherContent[3].description.description}</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-success">
                <i className="now-ui-icons files_single-copy-04"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{section.otherContent[4].title}</h4>
                <p>{section.otherContent[4].description.description}</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-success">
                <i className="now-ui-icons files_single-copy-04"></i>
              </div>
              <div className="description">
                <h4 className="info-title">{section.otherContent[5].title}</h4>
                <p>{section.otherContent[5].description.description}</p>
              </div>
            </div> */}
          </Col>
          <Col
            xs="12"
            // md={{ size: 12, offset: 2 }}
            lg={{ size: 8, offset: 2 }}
          >
            {bottomContent.map(item => {
              return (
                <div
                  className="info info-horizontal"
                  key={item.id}
                  style={{ paddingTop: "10px" }}
                >
                  {/* <div className="icon icon-info">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div> */}
                  <div className="description">
                    <h5 className="info-title">{item.title}</h5>
                    <p>{item.description.description}</p>
                  </div>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurSolutionSection
