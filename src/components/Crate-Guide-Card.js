import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Button, Card, CardBody, CardTitle } from "reactstrap"

const CrateGuideCard = ({ data }) => {
  return (
    <Card tag={Link} to={`/rta${data.fields.slug}`}>
      <div className="card-image p-3">
        <Image
          alt="..."
          className="img h-100 w-100"
          fluid={data.image.fluid}
          objectFit="contain"
          style={{ width: "100%" }}
        />
      </div>
      <CardBody className="text-center pt-0">
        <CardTitle tag="h4">{data.name}</CardTitle>
        <Button
          className="d-inline-flex align-items-center"
          color="primary"
          // onClick={e => e.preventDefault()}
        >
          {/* <i className="now-ui-icons arrows-1_cloud-download-93 mr-2" /> */}
          View Crate Instructions
        </Button>
      </CardBody>
    </Card>
  )
}

export default CrateGuideCard

export const query = graphql`
  fragment CrateCardFragment on ContentfulCrate {
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
`
