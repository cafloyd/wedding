import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

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
      <Row className="text-center">
        <div>
          <p>
            2020 has been a challenging year for everyone, but one good thing that has come out of it for us has been getting engaged. With so much unknown about the future, we didn&apos;t want to wait to get married and have decided to have a very small ceremony with immediate family this year. We wish we could have invited you to celebrate with us, but want to prioritize the health of our loved ones above anything else. With that in mind, we have decided to live stream the ceremony so that anyone interested can join us virtually.
          </p>
          <p>
            The ceremony and live stream will be taking place on December 13 at 2pm EST, and the video will also be viewable afterwards. 
          </p>
          <p>
            We hope you can join us, whether live for the virtual event or down the road when we have a belated reception to celebrate with you all.
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
