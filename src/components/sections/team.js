import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

        otherContent {
          ... on ContentfulInfo {
            id: contentful_id
            title
            description {
              description
            }
          }
        }
      }
    }
  `)

  return (
    <section style={{ position: "relative" }} id="team">
      <div className="features-6">
        <Col className="mr-auto ml-auto text-center" md="8">
          <h2 className="title">{section.title}</h2>
          <p className="description">{section.description.description}</p>
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
