import React from "react"
import DownloadButton from "../DownloadButton"
import { TabPane } from "reactstrap"

const Guide = ({ crate, tabId }) => {
  return (
    <TabPane tabId={tabId}>
      <p>
        Download your crate build guide here. This guide will walk you
        step-by-step through the crate build.
      </p>
      <DownloadButton button={crate.guide} />
    </TabPane>
  )
}

export default Guide
