import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Card, CardBody, CardTitle, CardFooter, Button } from "reactstrap"

const CrateGuideCard = ({ data }) => {
  return (
    <Card className="card-blog card-plain">
      <div className="card-image">
        <Image
          alt="..."
          className="img img-raised rounded p-3"
          fluid={data.image.fluid}
          objectFit="contain"
        />
      </div>
      <CardBody className="text-center">
        {/* <h6 className="category text-danger">
          <i className="now-ui-icons media-2_sound-wave"></i> Business
        </h6> */}
        <CardTitle tag="h5">{data.name}</CardTitle>
        {/* <p className="card-description">{data.description.description}</p> */}
        <CardFooter>
          <Button
            className="d-inline-flex align-items-center"
            color="primary"
            tag={Link}
            to={`/rta${data.fields.slug}`}
          >
            {/* <i className="now-ui-icons arrows-1_cloud-download-93 mr-2" /> */}
            View Crate Instructions
          </Button>
        </CardFooter>
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
