import React, { useState } from "react"
import { graphql } from "gatsby"
import Banner from "../components/banner"

import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap"
import VideoPlayer from "../components/VideoPlayer"
import DownloadButton from "../components/DownloadButton"

const CrateTemplate = ({ data }) => {
  const [tab, setTab] = useState("1")
  console.log(data)
  return (
    <>
      <Banner data={{ image: data.crate.image, heading: data.crate.name }} />
      <section className="features-6">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <Nav
                className="nav-pills-primary nav-pills-icons"
                pills
                role="tablist"
              >
                {data.crate.video && (
                  <NavItem>
                    <NavLink
                      className={tab === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault()
                        setTab("1")
                      }}
                    >
                      <i className="now-ui-icons media-1_button-play"></i>
                      Overview
                    </NavLink>
                  </NavItem>
                )}
                {data.crate.guide && (
                  <NavItem>
                    <NavLink
                      className={tab === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault()
                        setTab("2")
                      }}
                    >
                      <i className="now-ui-icons files_paper"></i>
                      Guide
                    </NavLink>
                  </NavItem>
                )}
                {data.crate.otherVideos && (
                  <NavItem>
                    <NavLink
                      className={tab === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault()
                        setTab("3")
                      }}
                    >
                      <i className="now-ui-icons design_bullet-list-67"></i>
                      More
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <TabContent
                className="tab-space text-center mt-5"
                activeTab={"tab" + tab}
              >
                {data.crate.video && (
                  <TabPane tabId="tab1">
                    <p>
                      {`Watch this quick video for an overview of the build process for a Portable Solutions ${data.crate.name.toLowerCase()}.`}
                    </p>

                    <VideoPlayer video={data.crate.video} />
                  </TabPane>
                )}
                {data.crate.guide && (
                  <TabPane tabId="tab2">
                    <p>
                      Download your crate build guide here. This guide will walk
                      you step-by-step through the crate build.
                    </p>
                    <DownloadButton button={data.crate.guide} />
                  </TabPane>
                )}
                {data.crate.otherVideos && (
                  <TabPane tabId="tab3">
                    <p>Here are some more videos to help you out.</p>
                  </TabPane>
                )}
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CrateTemplate

export const data = graphql`
  query($slug: String) {
    crate: contentfulCrate(fields: { slug: { eq: $slug } }) {
      name
      image: renderedImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      guide: buildGuide {
        ...DownloadButtonFragment
      }
      video: buildOverviewVideo {
        ...VideoFragment
      }
    }
  }
`
