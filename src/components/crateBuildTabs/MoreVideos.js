import React from "react"
import { TabPane } from "reactstrap"

const MoreVideos = ({ tabId }) => {
  return (
    <TabPane tabId={tabId}>
      <p>Here are some more videos to help you out.</p>
    </TabPane>
  )
}

export default MoreVideos
