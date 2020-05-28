import React from "react"
import DownloadButton from "../DownloadButton"
import { TabPane } from "reactstrap"

const Guide = ({ name, data, tabId }) => {
  return (
    <TabPane tabId={tabId}>
      <p>
        {`Download your ${name} build guide here. This guide will walk you step-by-step
        through the crate build.`}
      </p>
      <DownloadButton link={data} />
    </TabPane>
  )
}

export default Guide
