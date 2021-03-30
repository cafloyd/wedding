/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PhotoItem from "components/PhotoItem";
import PageSection from "components/PageSection";
import "./Clients.scss";

class Photos extends Component {
  constructor() {
    super();

    this.state = {
      showMore: false,
    };
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleMore() {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  render() {

    if (!this.props.frontmatter) {
      return null;
    }
  
    // FOR TEMPLATE: add "subheader: rootSubHeader" inside const below:
    const { anchor, header: rootHeader, photos, highlights } = this.props.frontmatter;
  
    return (
      <PageSection className={clsx("photos-section", this.props.className)} id={anchor}>
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
        <Row className="justify-content-center">
          <Button size="xl" variant="primary" className="text-uppercase main-button join-now" onClick={this.toggleMore}>
            <p className="buttonTitle">More/Hide</p>
          </Button> <br/>
        </Row>
        {this.state.showMore ? 
          <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
            {photos.map(
              ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                <PhotoItem
                  key={slideNumber}
                  imageFileName={imageFileName}
                  slideNumber={slideNumber}
                  imageFileNameDetail={imageFileNameDetail}
                  photos={photos}
                />
              ),
            )}
          </Row> : null
        }
      </PageSection>
    );
  }
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