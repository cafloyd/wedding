import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;

  return (
    // <PageSection className={className} id={anchor}>
    //   <Row className="justify-content-center">
    //     <Col lg={8} className="text-center">
    //       <h2 className="mt-0">{header}</h2>
    //       <hr className="divider my-4" />
    //       <p className="text-muted mb-5">{subheader}</p>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <h1>I am before the guestbook</h1>
    //     <script src="http://apps.bravenet.com/go.js?service=guestbook;id=1;usernum=1064629057" type="text/javascript" charset="utf-8" width="100%" />
    //     <h1>I am after the guestbook</h1>
    //   </Row>
    // </PageSection>
    <div />
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
