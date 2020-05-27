/*eslint-disable*/
import React, { useContext } from "react"
import { Link } from "gatsby"
import { FabContext } from "../context/fabContext"

// reactstrap components
import { Container, Button } from "reactstrap"

// core components

const Footer = React.forwardRef(({ children, indexPage }, ref) => {
  const [fabState] = useContext(FabContext)

  const footerClasses = `footer section${
    indexPage === true ? "" : " footer-raised"
  } mt-auto`
  return (
    <>
      <footer className={footerClasses} ref={ref}>
        <Container className="d-flex flex-column align-items-center">
          {/* <nav>
            <ul>
              <li> */}
          <Link className="h4 mb-n1 mt-0" to="/">
            Portable Solutions
          </Link>
          <p className="m-0 mb-3">Galena, Ohio</p>
          <Button
            href="tel:614-569-0307"
            className="btn-link m-0 mb-n2 h4 d-flex align-items-center"
            size="lg"
          >
            <i className="now-ui-icons tech_mobile mr-1" />
            614.569.0307
          </Button>
          <Button
            href="mailto:info@portable.solutions?Subject=Website%20Contact"
            className="btn-link m-0 h4 d-flex align-items-center"
            size="lg"
          >
            <i className="now-ui-icons ui-1_email-85 mr-1" />
            info@portable.solutions
          </Button>

          {/* </li> */}
          {/* <li>
                <a
                  href="https://www.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
          {/* </ul>
          </nav> */}
          {children}
          <div className="mt-3">
            © {new Date().getFullYear()}, Built by{" "}
            <a href="https://ajsolutions.netlify.com" target="_blank">
              AJSolutions
            </a>
          </div>
          {fabState.renderButton === true && indexPage && (
            <div style={{ height: "48px" }} />
          )}
        </Container>
      </footer>
    </>
  )
})

export default Footer
