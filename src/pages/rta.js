import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import CrateGuideCard from "../components/Crate-Guide-Card"
import { Container, Row, Col } from "reactstrap"
// import GuidesList from "../../components/sections/guides-list"

const RtaGuides = props => {
  const {
    page: { title, banner },
    crates,
  } = props.data

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} small={true} />
      <section className="features-6" style={{ marginBottom: "-30px" }}>
        <Container>
          <Row>
            {crates.all.map(crate => {
              return (
                <Col
                  xs={{ size: 10, offset: 1 }}
                  sm={{ size: 8, offset: 2 }}
                  md={{ size: 4, offset: 0 }}
                  lg={3}
                >
                  <CrateGuideCard data={crate} key={crate.id} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "RTA Build Guides" }) {
      ...BannerFragment
    }
    crates: allContentfulCrate(
      filter: {
        page_section: {
          elemMatch: { contentful_id: { eq: "5CAr6OxnbXBUutIIizazuv" } }
        }
      }
      sort: { fields: name, order: ASC }
    ) {
      all: nodes {
        ...CrateCardFragment
      }
    }
  }
`

export default RtaGuides
