import React from "react"
import { TabPane } from "reactstrap"
import VideoPlayer from "../VideoPlayer"

const OverviewVideo = ({ name, data, tabId }) => {
  return (
    <TabPane tabId={tabId}>
      <p>
        {`Watch this quick video for an overview of the build process for a Portable Solutions ${name.toLowerCase()}.`}
      </p>

      <VideoPlayer video={data} />
    </TabPane>
  )
}

export default OverviewVideo
