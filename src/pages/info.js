import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import { Container, Row } from "reactstrap"

const InfoPage = props => {
  const { data } = props
  const { banner, sections } = data.page

  return (
    <>
      <SEO title={data.page.title} />
      <Banner data={banner} />
      <Container>
        <Row>
          <h2>{sections[0].title}</h2>
          <p>{sections[0].description.description}</p>
        </Row>
      </Container>
    </>
  )
}

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Info" }) {
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
        ... on ContentfulInfo {
          title
          description {
            description
          }
        }
      }
    }
  }
`

export default InfoPage
