import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import Image from "components/Image";
import Icon from "./Icon";

import "./PhotoDetailDialog.scss"

const PhotoDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  slideNumber,
  header,
  subheader,
  content,
  extraInfo,
  photos,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* PREVIOUS MODAL HEADER */}
          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
          </Modal.Header> */}
          {/* MODAL HEADER FROM CSS TRICKS EXAMPLE */}
          <Modal.Header>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onHide}>
              <span aria-hidden="true">x</span>
            </button>
          </Modal.Header>
          <Modal.Body className="mx-auto">
            {/* PREVIOUS MODAL BODY CONTENT */}
            {/* <p className="item-intro text-muted">{subheader}</p>
            <Image
              className="img-fluid d-block"
              fileName={imageFileName}
              alt={imageAlt || header || subheader}
            />
            <p>{content}</p> */}
            <div
              id="carouselExample" 
              className="carousel slide" 
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="img-fluid d-block"
                    fileName={imageFileName}
                    alt={imageAlt || header || subheader}
                  />
                  <p>{content}</p>
                </div> {/* carousel-item active */}
                {photos.map(
                  () => (
                    <div className="carousel-item" key={slideNumber}>
                      <Image 
                        className="img-fluid d-block"
                        fileName={imageFileName}
                        alt={ imageAlt }
                      />
                    </div> // carousel-item
                  )
                )}
              </div> {/* carousel-inner */}
            </div> {/* carousel slide */}
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </Modal.Body>
          {/* PREVIOUS MODAL FOOTER */}
          <Modal.Footer>
            <div className="mx-auto">
              <Button variant="primary" onClick={onHide}>
                <Icon iconName="CloseIcon" />
                &nbsp; Close
              </Button>
            </div>
          </Modal.Footer>
          {/* MODAL FOOTER FROM CSS TRICKS EXAMPLE */}
          {/* <Modal.Footer>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </Modal.Footer> */}
        </div> {/* modal-content */}
      </div> {/* modal-dialog */}
    </Modal>
  );
};

PhotoDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  slideNumber: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
  photos: PropTypes.object,
};

PhotoDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  slideNumber: 0,
  header: "",
  subheader: "",
  content: "",
  extraInfo: null,
  photos: null,
};



export default PhotoDetailDialog;
