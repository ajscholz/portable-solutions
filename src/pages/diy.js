import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import GuidesList from "../components/sections/guides-list"

const DiyGuides = props => {
  const {
    page: { title, banner },
    crates,
  } = props.data

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} small={true} />
      <GuidesList guides={crates.all} page="diy" />
    </>
  )
}

export const data = graphql`
  {
    crates: contentfulPageSection(title: { eq: "DIY Guides List" }) {
      all: otherContent {
        ... on ContentfulCrate {
          id: contentful_id
          name
          image: renderedImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          fields {
            slug
          }
        }
      }
    }

    # crates: allContentfulCrate(
    #   filter: {
    #     page_section: {
    #       elemMatch: { contentful_id: { eq: "4OQhj1IhvqY2xKYQHCM0Q4" } }
    #     }
    #   }
    #   sort: { fields: name, order: ASC }
    # ) {
    #   nodes {
    #     name
    #   }
    # }
    page: contentfulPage(title: { eq: "DIY Build Guides" }) {
      ...BannerFragment
    }
    # crates: allContentfulCrate(
    #   filter: {
    #     page_section: {
    #       elemMatch: { contentful_id: { eq: "4OQhj1IhvqY2xKYQHCM0Q4" } }
    #     }
    #   }
    #   sort: { fields: name, order: ASC }
    # ) {
    #   ...GuidesListFragment
    # }
  }
`

export default DiyGuides
