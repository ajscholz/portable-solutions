import React, { useState } from "react"
import { graphql } from "gatsby"
import Banner from "../components/banner"

import { Container, Row, Col, Nav, TabContent } from "reactstrap"
import OverviewVideo from "../components/crateBuildTabs/OverviewVideo"
import Guide from "../components/crateBuildTabs/Guide"
import MoreVideos from "../components/crateBuildTabs/MoreVideos"
import TabButton from "../components/crateBuildTabs/TabButton"
import PasswordModal from "../components/PasswordModal"

const CrateTemplate = ({ data, pageContext: { type }, location }) => {
  console.log(location)
  const [currentTab, setCurrentTab] = useState(0)
  const [loggedIn, setLoggedIn] = useState(
    location === null
      ? false
      : location.state === null
      ? false
      : location.state.admin === null
      ? false
      : location.state.admin === "undefined"
      ? false
      : location.state.admin
  )
  // const [loggedIn, setLoggedIn] = useState((typeof location !== 'undefined') ? typeof location.state !== 'undefined' ? typeof location.state.admin !== 'undefined') ? location.state.admin ? true : false)
  const guideType = type === "rta" ? "rtaBuildGuide" : "diyBuildGuide"
  const password =
    type === "rta"
      ? data.crate.fields.rtaPassword
      : data.crate.fields.diyPassword
  const video = data.crate.video
  const guide = data.crate[guideType]
  const otherVideos = data.crate.otherVideos

  const allTabs = [
    {
      type: "video",
      component: OverviewVideo,
      data: video === null || video === undefined ? null : video,
      tabs: {
        icon: "media-1_button-play",
        text: "Overview Video",
      },
    },
    {
      type: guideType,
      component: Guide,
      data: guide === null || guide === undefined ? null : guide.file.url,
      tabs: {
        icon: "files_paper",
        text: "Build Guide",
      },
    },
    {
      type: "otherVideos",
      component: MoreVideos,
      data:
        otherVideos === null || otherVideos === undefined ? null : otherVideos,
      tabs: {
        icon: "design_bullet-list-67",
        text: "More Videos",
      },
    },
  ]

  // variable that keeps the index of the map useable for
  let tabIndex = -1
  const validTabs = allTabs
    .map(item => {
      if (item.data === null) return null
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
                <React.Fragment key={word}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div className="d-sm-none">{item.tabs.text}</div>
          </>
        ),
        contentComponent: React.createElement(
          item.component,
          {
            name: data.crate.name,
            tabId: `tab${tabIndex}`,
            data: item.data,
          },
          null
        ),
      }
    })
    .filter(crate => crate !== null)

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
                {validTabs.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.tabComponent}
                  </React.Fragment>
                ))}
              </Nav>
              <TabContent
                className="tab-space text-center mt-3 pb-2"
                activeTab={"tab" + currentTab}
              >
                {validTabs.map((item, index) => (
                  <React.Fragment key={index}>
                    {" "}
                    {item.contentComponent}
                  </React.Fragment>
                ))}
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

      <PasswordModal
        headerText={`${data.crate.name} Login`}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        password={password}
        dismissable={false}
      />
    </>
  )
}

export default CrateTemplate

export const data = graphql`
  query($slug: String) {
    crate: contentfulCrate(fields: { slug: { eq: $slug } }) {
      name
      fields {
        diyPassword
        rtaPassword
      }
      image: renderedImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      rtaBuildGuide {
        ...DownloadButtonFragment
      }
      diyBuildGuide {
        ...DownloadButtonFragment
      }
      video: buildOverviewVideo {
        ...VideoFragment
      }
    }
  }
`
