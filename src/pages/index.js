import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import Banner from "../components/banner"
import { Container, Row, Col } from "reactstrap"

const IndexPage = props => {
  const { data } = props
  const { infoPage, indexPage } = data

  console.log(data)

  const s1 = infoPage.sections[0]
  const s2 = infoPage.sections[1]

  return (
    <>
      <SEO title={indexPage.title} />
      <a name="top" />
      <Banner data={indexPage.banner} />
      <a name="crate-info" />
      <div className="features-6">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">{s1.title}</h2>

              <h4 className="description">{s1.description.description}</h4>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className="info info-horizontal">
                <div className="icon icon-info">
                  <i className="now-ui-icons design-2_html5"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">{s1.otherContent[0].title}</h5>
                  <p>{s1.otherContent[0].description.description}</p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="now-ui-icons design_palette"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">{s1.otherContent[1].title}</h4>
                  <p>{s1.otherContent[1].description.description}</p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="phone-container">
                <img alt="..." src={require("../assets/img/iphone2.png")}></img>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">{s1.otherContent[2].title}</h5>
                  <p>{s1.otherContent[2].description.description}</p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-success">
                  <i className="now-ui-icons files_single-copy-04"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">{s1.otherContent[3].title}</h4>
                  <p>{s1.otherContent[3].description.description}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <a name="qualifications" />
      <section style={{ position: "relative" }}>
        <Image
          className="section-image position-absolute"
          style={{ height: "100%" }}
          fluid={s2.backgroundImage.fluid}
        />

        <div className="features-7 section-image position-relative">
          <Col className="mr-auto ml-auto text-center" md="8">
            <h2 className="title">{s2.title}</h2>
            <h4 className="description">{s2.description.description}</h4>
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
                      <h5 className="info-title">{s2.otherContent[0].title}</h5>
                      <p className="description">
                        {s2.otherContent[0].description.description}
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design_palette"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">{s2.otherContent[1].title}</h5>
                      <p className="description">
                        {s2.otherContent[1].description.description}
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">{s2.otherContent[2].title}</h5>
                      <p className="description">
                        {s2.otherContent[2].description.description}
                      </p>
                    </div>
                  </div>
                </Col>
              </Col>
              <Col md="6">
                {/* <div className="image-container">
                  <img alt="..." src={require("../assets/img/ipad3.png")}></img>
                  <Image fluid={s2.foregroundImage.fluid} />
                </div> */}
                <Image
                  className="image-container"
                  fluid={s2.foregroundImage.fluid}
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
    </>
  )
}

export const data = graphql`
  {
    indexPage: contentfulPage(title: { eq: "Index" }) {
      title
      banner {
        heading
        image: backgroundImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      sections {
        ... on ContentfulPageSection {
          title
          description {
            description
          }
        }
      }
    }
    infoPage: contentfulPage(title: { eq: "Info" }) {
      title
      banner {
        heading
        image: backgroundImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      sections {
        ... on ContentfulPageSection {
          title
          description {
            description
          }
          backgroundImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          foregroundImage {
            fluid {
              ...GatsbyContentfulFluid
            }
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
    }
  }
`

export default IndexPage
