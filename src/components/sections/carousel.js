import React from "react"
import ImageCarousel from "../ImageCarousel"
import { graphql, useStaticQuery } from "gatsby"

const CarouselSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulImageSection(
        contentful_id: { eq: "2xTc4xH1SAKN710vSg73B" }
      ) {
        images {
          id: contentful_id
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  return <ImageCarousel items={section.images} />
}

export default CarouselSection
