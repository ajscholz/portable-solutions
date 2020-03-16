import React from "react"
import ImageCarousel from "../ImageCarousel"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const CarouselSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulImageSection(
        contentful_id: { eq: "2xTc4xH1SAKN710vSg73B" }
      ) {
        backgroundImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        crates {
          id: contentful_id
          name
          image: renderedImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "60vh" }}>
        <Image
          fluid={section.backgroundImage.fluid}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
        <ImageCarousel items={section.crates} />
      </div>
    </>
  )
}

export default CarouselSection
