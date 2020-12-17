import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import Image from "components/Image";
import Icon from "./Icon";

const PhotoDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  extraInfo,
  ...restProps
}) => {
  return (
    <div>

    
    {/* <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <p className="item-intro text-muted">{subheader}</p>
        <Image
          className="img-fluid d-block"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
        <p>{content}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            <Icon iconName="CloseIcon" />
            &nbsp; Close Photo
          </Button>
        </div>
      </Modal.Footer>
    </Modal> */}


  <div 
    className="modal fade" 
    id="exampleModal" 
    tabIndex="-1" 
    role="dialog" 
    aria-hidden="true"
  >
    <div 
      className="modal-dialog" 
      role="document"
    >
      <div 
        className="modal-content"
      >
        <div 
          className="modal-header"
        >
          <button 
            type="button" 
            className="close" 
            data-dismiss="modal" 
            aria-label="Close"
          >
            <span 
              aria-hidden="true"
            >
              ×
            </span>
          </button>
        </div> {/* modal header */}
        <div 
          className="modal-body"
        >
          
        {/* <!-- Carousel markup: https://getbootstrap.com/docs/4.4/components/carousel/ --> */}
        <div 
          id="carouselExample" 
          className="carousel slide" 
          data-ride="carousel"
        >
          <div 
            className="carousel-inner"
          >
            <div 
              className="carousel-item active"
            >
              <img 
                className="d-block w-100" 
                src="/image-1.jpg" 
                alt="image1" 
              />
            </div> {/* carousel item */}
            {/* <div className="carousel-item">
              <img className="d-block w-100" src="/image-2.jpg" alt="image2" />
            </div> 
            <div className="carousel-item">
              <img className="d-block w-100" src="/image-3.jpg" alt="image3"/>
            </div> 
            <div className="carousel-item">
              <img className="d-block w-100" src="/image-4.jpg" alt="image4" />
            </div>  */}
          </div> {/* carousel inner */}
          <a 
            className="carousel-control-prev" 
            href="#carouselExample" 
            role="button" 
            data-slide="prev"
          >
            <span 
              className="carousel-control-prev-icon" 
              aria-hidden="true" 
            />
            <span 
              className="sr-only"
            >
              Previous
            </span>
          </a> {/* carousel control prev */}
          <a 
            className="carousel-control-next" 
            href="#carouselExample" 
            role="button" 
            data-slide="next"
          >
            <span 
              className="carousel-control-next-icon" 
              aria-hidden="true"
            />
            <span 
              className="sr-only"
            >
              Next
            </span>
          </a> {/* carousel control prev */}
        </div> {/* carousel example */}
      </div> {/* modal body */}
    </div> {/* modal content */}
  </div> {/* modal dialog */}
  <div 
    className="modal-footer"
  >
    <button 
      type="button" 
      className="btn btn-secondary" 
      data-dismiss="modal"
    >
      Close
    </button>
  </div> {/* modal footer */}
</div> {/* modal fade */}
</div>
  );
};

PhotoDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
};

PhotoDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  extraInfo: null,
};

export default PhotoDetailDialog;
