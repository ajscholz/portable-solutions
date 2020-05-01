import React from "react"
import { graphql } from "gatsby"
import { Button } from "reactstrap"

const DownloadButton = ({ button }) => {
  return (
    <Button
      tag="a"
      href={`https:${button.file.url}`}
      target="_blank"
      rel="noopener noreferrer"
      size="lg"
      className="mb-0"
    >
      <div className="d-flex align-items-center">
        <i className="now-ui-icons arrows-1_cloud-download-93 mr-2" />
        {`Download Guide`}
      </div>
    </Button>
  )
}

export default DownloadButton

export const query = graphql`
  fragment DownloadButtonFragment on ContentfulAsset {
    file {
      url
    }
  }
`
