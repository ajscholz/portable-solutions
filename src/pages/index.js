import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import Banner from "../components/banner"
import ProductSection from "../components/sections/product"
import CrateInfoSection from "../components/sections/crate-info"
import QualificationsSection from "../components/sections/qualifications"

const IndexPage = props => {
  const { data } = props
  const { sections, title, banner } = data.indexPage

  const productData = sections.find(
    section => section.id === "1kzR2f6Y1eXS0Irtj4TUlB" && section
  )

  const crateInfoData = sections.find(
    section => section.id === "2eVfAiZsaMtqxahL3A6L2a" && section
  )

  const qualificationsData = sections.find(
    section => section.id === "42OQt7zxmkZkiK7FkHDdOf" && section
  )

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} />

      <ProductSection sectionData={productData} />
      <CrateInfoSection sectionData={crateInfoData} />
      <QualificationsSection sectionData={qualificationsData} />
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
        id: contentful_id
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
`

export default IndexPage
