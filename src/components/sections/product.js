import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Col, Row, Container } from "reactstrap"

const ProductSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "4poBxRjdKxbr2Oqf4ahms" }
      ) {
        title
        description {
          description
        }
      }
    }
  `)
  return (
    <section className="features-6" id="product">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{section.title}</h2>

            <h4 className="description">{section.description.description}</h4>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductSection
