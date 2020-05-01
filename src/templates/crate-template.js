import React, { useState } from "react"
import { graphql } from "gatsby"
import Banner from "../components/banner"

import { Container, Row, Col, Nav, TabContent } from "reactstrap"
import OverviewVideo from "../components/crateBuildTabs/OverviewVideo"
import Guide from "../components/crateBuildTabs/Guide"
import MoreVideos from "../components/crateBuildTabs/MoreVideos"
import TabButton from "../components/crateBuildTabs/TabButton"

const allTabs = [
  {
    type: "video",
    component: OverviewVideo,
    tabs: {
      icon: "media-1_button-play",
      text: "Overview Video",
    },
  },
  {
    type: "guide",
    component: Guide,
    tabs: {
      icon: "files_paper",
      text: "Build Guide",
    },
  },
  {
    type: "otherVideos",
    component: MoreVideos,
    tabs: {
      icon: "design_bullet-list-67",
      text: "More Videos",
    },
  },
]

const CrateTemplate = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(0)

  // variable that keeps the index of the map useable for
  let tabIndex = -1
  const validTabs = allTabs
    .map((item, index) => {
      if (data.crate[item.type] === null || data.crate[item.type] === undefined)
        return null
      tabIndex++
      return {
        tabComponent: React.createElement(
          TabButton,
          {
            tab: tabIndex,
            setTab: setCurrentTab,
            active: currentTab === tabIndex,
            key: tabIndex,
          },
          <>
            <i
              className={`now-ui-icons ${item.tabs.icon} py-4 my-sm-2 mt-sm-3 mr-3 mx-sm-4 px-sm-2`}
              style={{ lineHeight: 0 }}
            />
            <div className="d-none d-sm-block mb-1">
              {item.tabs.text.split(" ").map(word => (
                <>
                  {word}
                  <br />
                </>
              ))}
            </div>
            <div className="d-sm-none">{item.tabs.text}</div>
          </>
        ),
        contentComponent: React.createElement(
          item.component,
          { crate: data.crate, tabId: `tab${tabIndex}` },
          null
        ),
      }
    })
    .filter(crate => crate !== null)
  console.log(validTabs)

  return (
    <>
      <Banner data={{ image: data.crate.image, heading: data.crate.name }} />
      <section className="features-6">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-stretch align-items-sm-center">
              <Nav
                className="nav-pills-primary nav-pills-icons flex-column flex-sm-row align-items-stretch flex-grow-1"
                pills
                role="tablist"
              >
                {validTabs.map(item => item.tabComponent)}
              </Nav>
              <TabContent
                className="tab-space text-center mt-3 pb-2"
                activeTab={"tab" + currentTab}
              >
                {validTabs.map(item => item.contentComponent)}
                {/* {data.crate.video && (
                  <OverviewVideo crate={data.crate} tabId="tab0" />
                )}
                {data.crate.guide && <Guide crate={data.crate} tabId="tab1" />}
                {data.crate.otherVideos && <MoreVideos tabId="tab2" />} */}
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
