import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import GuidesList from "../components/sections/guides-list"

const RtaGuides = props => {
  const {
    page: { title, banner },
    crates,
  } = props.data

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} small={true} />
      <GuidesList guides={crates.all} page="rta" />
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
      ...GuidesListFragment
    }
  }
`

export default RtaGuides
