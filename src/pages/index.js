import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import Banner from "../components/banner"
import ProductSection from "../components/sections/product"
import OurSolutionSection from "../components/sections/solution"
import TeamSection from "../components/sections/team"
import HowSection from "../components/sections/how"
import WhySection from "../components/sections/why"
import CarouselSection from "../components/sections/carousel"

import { Jumbotron } from "reactstrap"
import ContactSection from "../components/sections/contact"

const IndexPage = props => {
  const { data } = props
  const { title, banner } = data.indexPage

  return (
    <>
      <SEO title={title} />
      <Banner data={banner} objectPosition="51% 63%" />

      <ProductSection />
      <WhySection />
      <HowSection />
      <Jumbotron
        fluid
        className="py-0 my-0"
        style={{ minHeight: "25vh", maxHeight: "35vh", position: "relative" }}
      >
        <Image
          fluid={data.imageSection.images[0].fluid}
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
      <OurSolutionSection />
      <Jumbotron
        fluid
        className="py-0 my-0"
        style={{ height: "60vh", position: "relative" }}
      >
        <CarouselSection />
      </Jumbotron>
      <TeamSection />
      <ContactSection />
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
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    imageSection: contentfulImageSection(
      contentful_id: { eq: "4MJGfktr4JvcQ9cFe8hqqN" }
    ) {
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default IndexPage
