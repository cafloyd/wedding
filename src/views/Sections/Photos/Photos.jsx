import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PhotoItem from "components/PhotoItem";
import PageSection from "components/PageSection";
import PhotoSections from "./PhotoSections"
import "./Photos.scss";

const Photos = ({ className, frontmatter}) =>{

  if (!frontmatter) {
    return null;
  }

  // FOR TEMPLATE: add "subheader: rootSubHeader" inside const below:
  const { anchor, header: rootHeader, highlights, gettingReady, firstLook, ceremony, portraits, reception, familyPortraits } = frontmatter;

  return (
    <PageSection className={clsx("photos-section", className)} id={anchor}>
        {/* REINSTATE FOR TEMPLATE */}
        {/* <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row> */}
      <Row>
        <SectionHeader header={rootHeader} />
      </Row>
      <Row>
        <Col>
          <h3 className="section-subheading text-muted">All photos provided by&nbsp;
            <a
              href="https://anaisabelphotography.com/"
              target="_blank"
              rel="noreferrer"
              >
              Ana Isabel Photography
            </a>
          </h3>
        </Col>
      </Row>
      <Row id="highlights" data-toggle="modal" data-target="#highlightsGallery">
        {highlights.map(
          ({ slideNumber, imageFileName, imageFileNameDetail }) => (
            <PhotoItem
              key={slideNumber}
              imageFileName={imageFileName}
              slideNumber={slideNumber}
              imageFileNameDetail={imageFileNameDetail}
              highlights={highlights}
            />
          ),
        )}
      </Row> {/* highlightsGallery */}
      <Row>
        <PhotoSections gettingReady={gettingReady} firstLook={firstLook} ceremony={ceremony} portraits={portraits} reception={reception} familyPortraits={familyPortraits} />
      </Row>
    </PageSection>
  );
}

Photos.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Photos.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Photos;