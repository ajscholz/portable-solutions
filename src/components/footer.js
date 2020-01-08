/*eslint-disable*/
import React from "react"
import { Link } from "gatsby"

// reactstrap components
import { Container } from "reactstrap"

// core components

const Footer = React.forwardRef(({ children }, ref) => {
  return (
    <>
      <footer className="footer" ref={ref}>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/">Portable Solutions</Link>
              </li>
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
            </ul>
          </nav>
          {children}
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed and developed by{" "}
            <a href="https://ajsolutions.netlify.com" target="_blank">
              AJSolutions
            </a>
          </div>
        </Container>
      </footer>
    </>
  )
})

export default Footer
