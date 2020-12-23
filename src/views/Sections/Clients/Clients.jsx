import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PhotoItem from "components/PhotoItem";
import PageSection from "components/PageSection";
import "./Clients.scss";

const Photos = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  // FOR TEMPLATE: add "subheader: rootSubHeader" inside const below:
  const { anchor, header: rootHeader, photos } = frontmatter;

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
      <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
        {photos.map(
          ({ content, extraInfo, header, slideNumber, imageFileName, imageFileNameDetail, subheader }) => (
            <PhotoItem
              key={slideNumber}
              imageFileName={imageFileName}
              slideNumber={slideNumber}
              header={header}
              subheader={subheader}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              photos={photos}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row> {/* photoGallery */}
    </PageSection>
  );
};

Photos.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Photos.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Photos;