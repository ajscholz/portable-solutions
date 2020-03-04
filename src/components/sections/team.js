import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ImageOverlay from "../ImageOverlay"

import { Col } from "reactstrap"

const TeamSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "42OQt7zxmkZkiK7FkHDdOf" }
      ) {
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
  `)

  return (
    <section style={{ position: "relative" }} id="qualifications">
      <Image
        className="section-image position-absolute"
        style={{ height: "100%" }}
        fluid={section.backgroundImage.fluid}
      />
      <ImageOverlay />
      <div className="features-7 section-image position-relative">
        <Col className="mr-auto ml-auto text-center" md="8">
          <h2 className="title">{section.title}</h2>
          <h4 className="description">{section.description.description}</h4>
        </Col>
        {/* <Container fluid>
          <Row>
            <Col
              md={{ size: "10", offset: "1" }}
              lg={{ size: "8", offset: "2" }}
            >
              <Image
                className="image-container"
                fluid={section.foregroundImage.fluid}
                // imgStyle={{
                //   objectPosition: "left center",
                //   objectFit: "none",
                // }}
              />
            </Col>
          </Row>
        </Container> */}
      </div>
    </section>
  )
}

export default TeamSection
