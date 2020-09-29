import React from "react"
import { Col, Container, Row, TabPane } from "reactstrap"
import VideoPlayer from "../VideoPlayer"

const MoreVideos = ({ data, tabId }) => {
  console.log(data)
  return (
    <TabPane tabId={tabId}>
      <Container fluid>
        <Row>
          {data.map(video => {
            console.log(video)
            return (
              <Col sm={12} key={video.url}>
                <h3 style={{ textAlign: "left" }}>{video.title}</h3>
                <VideoPlayer video={video} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </TabPane>
  )
}

export default MoreVideos
