import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: { facebook, github, linkedin, medium, twitter },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col className="copyright">
            ©&nbsp;
            <a 
              href="https://caitlinfloyd.com/"
              target="_blank"
              rel="noreferrer"
            >
              Caitlin Floyd
            </a>
            , 2020
          </Col> {/* copyright */}
          <Col className="anaIsabel">
            Photos by&nbsp;
            <a 
              href="https://anaisabelphotography.com/"
              target="_blank"
              rel="noreferrer"
            >
              Ana Isabel Photography
            </a>
          </Col> {/* anaIsabel */}
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
