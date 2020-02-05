import React from "react"

import Image from "gatsby-image"
import ImageOverlay from "./ImageOverlay"

// reactstrap components
import { Container } from "reactstrap"

const Banner = props => {
  const { data, objectPosition } = props

  // let pageHeader = React.createRef()
  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)"
  //     }
  //     window.addEventListener("scroll", updateScroll)
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll)
  //     }
  //   }
  // })

  const wrapperStyles = props.small ? { minHeight: "75vh" } : {}

  return (
    <>
      <section
        id="#"
        className="page-header d-flex align-items-center"
        style={{
          marginTop: "106px",
          maxHeight: "60vh",
          minHeight: "60vh",
          ...wrapperStyles,
        }}
      >
        <Image
          style={{ position: "unset" }}
          fluid={data.image.fluid}
          objectPosition={objectPosition}
          // ref={pageHeader}
        />
        <ImageOverlay />

        <div className="content-center">
          <Container>
            <h2 className="title h1">{data.heading}</h2>
            <div className="text-center">
              {/* <Button
                className="btn-icon btn-round mr-1"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round mr-1"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button> */}
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Banner
