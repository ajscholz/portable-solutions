import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import Banner from "../components/banner"
import ProductSection from "../components/sections/product"
import CrateInfoSection from "../components/sections/crate-info"
import QualificationsSection from "../components/sections/qualifications"
import HowSection from "../components/sections/how"
import WhySection from "../components/sections/why"

import { Jumbotron } from "reactstrap"

const IndexPage = props => {
  const { data } = props
  const { sections, title, banner } = data.indexPage

  const productData = sections.find(
    section => section.id === "4poBxRjdKxbr2Oqf4ahms" && section
  )

  const whyData = sections.find(
    section => section.id === "1kzR2f6Y1eXS0Irtj4TUlB" && section
  )

  const howData = sections.find(
    section => section.id === "6hH8zT9kM39dTllIp35zuA" && section
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
      <WhySection sectionData={whyData} />
      <HowSection sectionData={howData} />
      <Jumbotron
        fluid
        className="py-0 my-0"
        style={{ minHeight: "25vh", maxHeight: "35vh", position: "relative" }}
      >
        <Image
          fluid={data.imageSection.image.fluid}
          style={{ position: "unset" }}
        />
        <div
          className="position-absolute"
          style={{
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            background: "rgba(0, 0, 0, .5)",
          }}
        />
      </Jumbotron>
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
        ... on ContentfulPageSection {
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
    imageSection: contentfulImageSection(
      contentful_id: { eq: "4MJGfktr4JvcQ9cFe8hqqN" }
    ) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default IndexPage
