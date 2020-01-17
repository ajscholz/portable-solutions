import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Banner from "../../components/banner"
import GuidesList from "../../components/sections/guides-list"

const DiyGuides = props => {
  const { data } = props
  const { page, guides } = data
  const { title, banner, sections } = page

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} small={true} />
      <GuidesList data={sections[0]} guides={guides} />
    </>
  )
}

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "DIY Build Guides" }) {
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
          title
        }
      }
    }
    guides: allContentfulBuildGuides(filter: { type: { eq: "DIY" } }) {
      all: nodes {
        id: contentful_id
        name
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        guide {
          file {
            url
          }
        }
      }
    }
  }
`

export default DiyGuides
