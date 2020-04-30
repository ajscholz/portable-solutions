import React from "react"
import ReactPlayer from "react-player"
import { graphql } from "gatsby"

const VideoPlayer = ({ video }) => {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%" }}>
      <ReactPlayer
        url={`https:${video.url}`}
        controls={true}
        config={{
          youtube: { modestbranding: 1, iv_load_policy: 3 },
        }}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0", left: "0" }}
      />
    </div>
  )
}

export default VideoPlayer

export const query = graphql`
  fragment VideoFragment on ContentfulYouTubeVideo {
    title
    url
  }
`
