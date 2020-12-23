import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import PhotoDetailDialog from "components/PhotoDetailDialog";

import "./PhotoItem.scss";
import "./PhotoDetailDialog.scss"

const PhotoItem = ({
  imageFileName,
  imageAlt,
  slideNumber,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
  photos
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="photo-item">
        <a
          role="button"
          tabIndex={-1}
          className="photo-link"
          data-toggle="modal"
          data-target="#photoCarousel"
          data-slide-to={slideNumber}
          onClick={handleShowDetail}
        >
          <Image
            className="img-fluid w-100"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
            photos={photos}
          />
          <div className="photo-hover">
            <div className="photo-hover-content">
              <Icon iconName="PlusIcon" size="2x" />
            </div>
          </div>
        </a>
        {/* PREVIOUS MODAL EXTRA CONTENT */}
        {/* <div className="photo-caption">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
        </div> */}
      </Col>
      <PhotoDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        content={content}
        extraInfo={extraInfo}
        data-target="#photoCarousel"
        data-slide-to={slideNumber}
        photos={photos}
      />
    </>
  );
};

PhotoItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  slideNumber: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
  photos: PropTypes.object,
};

PhotoItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  extraInfo: null,
  photos: null,
};

export default PhotoItem;
