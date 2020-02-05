import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Container, Row, Col } from "reactstrap"
import FABTogglerButton from "../FABTogglerButton"

const HowSection = () => {
  const { section } = useStaticQuery(graphql`
    {
      section: contentfulPageSection(
        contentful_id: { eq: "6hH8zT9kM39dTllIp35zuA" }
      ) {
        title
        otherContent {
          id: contentful_id
          title
          description {
            description
          }
        }
      }
    }
  `)

  return (
    <section className="features-6" id="how">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{section.title}</h2>
          </Col>
        </Row>
        <ol className="big-number-list row">
          {section.otherContent.map((item, index) => (
            <li key={item.id} className="col-md-6 mt-4">
              <div className="info info-horizontal pt-0">
                <div className="description">
                  <h5 className="info-title">{item.title}</h5>
                  <p>
                    {item.description.description}
                    {index + 1 === section.otherContent.length && (
                      <>
                        {` Are you ready? `}
                        <span>
                          <FABTogglerButton
                            className="btn-link m-0 p-0 text-success"
                            style={{ cursor: "pointer" }}
                            onClick={() => alert("clicked")}
                            style={{ fontSize: "inherit" }}
                          >
                            Get Started Now!
                          </FABTogglerButton>
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default HowSection
