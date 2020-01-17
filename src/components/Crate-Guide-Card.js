import React from "react"
import Image from "gatsby-image"
import { Card, CardBody, CardTitle, CardFooter, Button } from "reactstrap"

const CrateGuideCard = props => {
  const { data } = props
  return (
    <Card className="card-blog card-plain">
      <div className="card-image">
        <Image
          alt="..."
          className="img img-raised rounded"
          fluid={data.image.fluid}
        />
      </div>
      <CardBody className="text-center">
        {/* <h6 className="category text-danger">
          <i className="now-ui-icons media-2_sound-wave"></i> Business
        </h6> */}
        <CardTitle tag="h5">{data.name}</CardTitle>
        <p className="card-description">{data.description.description}</p>
        <CardFooter>
          <Button
            className="d-inline-flex align-items-center"
            color="primary"
            href={`https://${data.guide.file.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="now-ui-icons arrows-1_cloud-download-93 mr-2" />
            Download Guide
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  )
}

export default CrateGuideCard
