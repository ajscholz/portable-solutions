import React, { useState } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import GuidesList from "../components/sections/guides-list"
import PasswordModal from "../components/PasswordModal"
import { Button, Container, Row } from "reactstrap"

const DiyGuides = props => {
  const {
    page: { title, banner },
    crates,
  } = props.data

  const [showCrates, setShowCrates] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(true)

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} small={true} />
      {showCrates ? (
        <GuidesList guides={crates.all} />
      ) : (
        <section className="features-6" style={{ marginBottom: "-30px" }}>
          <Container>
            <Row className="justify-content-center">
              {/* <Col> */}
              <Button size="lg" onClick={() => setShowLoginModal(true)}>
                Input Password
              </Button>
              {/* </Col> */}
            </Row>
          </Container>
        </section>
      )}
      <PasswordModal
        setShowCrates={() => setShowCrates(true)}
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </>
  )
}

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "DIY Build Guides" }) {
      ...BannerFragment
    }
    crates: allContentfulCrate(
      filter: {
        page_section: {
          elemMatch: { contentful_id: { eq: "4OQhj1IhvqY2xKYQHCM0Q4" } }
        }
      }
      sort: { fields: name, order: ASC }
    ) {
      ...GuidesListFragment
    }
  }
`

export default DiyGuides
