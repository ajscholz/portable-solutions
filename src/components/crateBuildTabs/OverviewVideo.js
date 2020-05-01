import React from "react"
import { TabPane } from "reactstrap"
import VideoPlayer from "../VideoPlayer"

const OverviewVideo = ({ crate, tabId }) => {
  return (
    <TabPane tabId={tabId}>
      <p>
        {`Watch this quick video for an overview of the build process for a Portable Solutions ${crate.name.toLowerCase()}.`}
      </p>

      <VideoPlayer video={crate.video} />
    </TabPane>
  )
}

export default OverviewVideo
