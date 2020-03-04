import React from "react"
import PropTypes from "prop-types"

const ImageOverlay = props => {
  const { dark, light } = props

  const opacity = dark === true ? "0.8" : light === true ? "0.4" : "0.6"

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(rgba(22, 27, 32, ${opacity}), rgba(22, 27, 32, ${opacity}))`,
      }}
    />
  )
}

ImageOverlay.propTypes = {
  dark: PropTypes.bool,
  light: PropTypes.bool,
}

ImageOverlay.defaultProps = {
  dark: false,
  light: false,
}

export default ImageOverlay
