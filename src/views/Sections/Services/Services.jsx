import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Services.scss"

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      {/* <Row className="text-center"> */}
      <Row>
        <div className="message">
          <p>
            2020 has been a challenging year, but for us, one good thing that has happened has been getting engaged. In such uncertain times, we didn&apos;t want to wait to get married, and have decided instead to have a very small ceremony this year with our immediate family. We wish we could be celebrating with all our friends and family in person, but we want to prioritize the health of our loved ones above anything else. With this in mind, we have decided to live-stream the ceremony so that anyone interested can join us virtually, with a larger reception to come at some point in the future.
          </p>
          <p>
            The ceremony and livestream will be taking place on December 13 at 2pm EST, and the video will also be viewable afterwards. 
          </p>
          <p>
            We hope you can join us, whether live for the virtual event or down the road when we have a belated reception to celebrate with you all. We&apos;ll look forward to seeing you!
          </p>
          {/* <br /> */}
          <p>
            Sending our love,
          </p>
          {/* <br /> */}
          <p>
            Caitlin & Justin
          </p>
        </div>
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
