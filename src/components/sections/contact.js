import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ImageOverlay from "../ImageOverlay"
import { Container, Row, Col } from "reactstrap"
import ContactCard from "../ContactCard"

const ContactSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "7gZFTXGcdbx4SXysfHChhg" }
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
      }
    }
  `)
  return (
    <section style={{ position: "relative" }} id="contact">
      <Image
        className="section-image position-absolute"
        style={{ height: "100%" }}
        fluid={section.backgroundImage.fluid}
      />
      <ImageOverlay />
      <Container className="features-7" fluid>
        <Row>
          <Col className="ml-auto mr-auto text-center" xs="12">
            <h2 className="title">{section.title}</h2>
          </Col>
          <Col
            md={{ size: 10, offset: 1 }}
            lg={{ size: 8, offset: 2 }}
            xl={{ size: 6, offset: 3 }}
          >
            <ContactCard fab={false} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
