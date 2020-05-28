import React from "react"
import { Col, Row, Container } from "reactstrap"
import CrateGuideCard from "../Crate-Guide-Card"
import { graphql } from "gatsby"

const GuidesList = ({ guides, page }) => {
  return (
    <section className="features-6" style={{ marginBottom: "-30px" }}>
      <Container>
        <Row>
          {guides.map(guide => {
            return (
              <Col
                xs={{ size: 10, offset: 1 }}
                sm={{ size: 8, offset: 2 }}
                md={{ size: 4, offset: 0 }}
                lg={3}
                key={guide.fields.slug}
              >
                <CrateGuideCard
                  data={guide}
                  buttonUrl={`/${page}${guide.fields.slug}`}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default GuidesList

export const query = graphql`
  fragment GuidesListFragment on ContentfulCrateConnection {
    all: nodes {
      ...CrateCardFragment
    }
  }
`
