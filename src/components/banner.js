import React from "react"

import Image from "gatsby-image"

// reactstrap components
import { Container } from "reactstrap"

const Banner = props => {
  const { data } = props

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

  const wrapperStyles = props.small
    ? { minHeight: "40vh", maxHeight: "480px" }
    : {}

  return (
    <>
      <div
        className="page-header page-header-small d-flex align-items-center"
        style={{ marginTop: "90px", ...wrapperStyles }}
      >
        <Image
          style={{ position: "unset" }}
          fluid={data.image.fluid}
          // ref={pageHeader}
        />

        <div className="content-center">
          <Container>
            <h1 className="title">{data.heading}</h1>
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
      </div>
    </>
  )
}

export default Banner
