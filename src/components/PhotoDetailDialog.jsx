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
  highlights,
  ...restProps
}) => {
  // const currentIndex = slideNumber - 1
  // const previousItems = function() {
  //   if (currentIndex > 0) {
  //     return photos.slice(0, currentIndex)
  //   }
  //   return []
  // }
  // const currentItem = photos[currentIndex]
  // const nextItems = function() {
  //   if (currentIndex <= photos.length){
  //     return photos.slice(currentIndex + 1)
  //   }
  //   return []
  // }

  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal fade"
      id="photoGallery"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <Modal.Header>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onHide}>
          <span aria-hidden="true">x</span>
        </button>
      </Modal.Header>
      <Modal.Body> {/* className="mx-auto" */}
        <div
          id="photoCarousel" 
          className="carousel slide" 
          data-ride="carousel"
        >
          <div className="carousel-inner">
          {/* {previousItems.length > 0 ? (
            previousItems.map(
              (previousItem) => (
                <div className="carousel-item" key={previousItem.slideNumber}>
                  <Image 
                    className="img-fluid d-block"
                    fileName={previousItem.imageFileName}
                    alt={ previousItem.imageAlt }
                  />
                </div> // carousel-item
              ))
          ) : null}  */}
          {/* previousItems.map */}
            <div className="carousel-item active">
              <div className="container-fluid">
                <Image
                  className="img-fluid d-block"
                  fileName={imageFileName}
                  alt={imageAlt || header || subheader}
                />
                  <div>
                    <p className="photoCaption">Photo courtesy&nbsp;
                      <a 
                        href="https://anaisabelphotography.com/"
                        className="countdownLinks"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Ana Isabel Photography
                      </a>
                    </p>
                  </div>
              </div> {/* container */}
            </div> {/* carousel-item active */}
            {/* { nextItems.length > 0 ? (
              nextItems.map(
                (nextItem) => (
                  <div className="carousel-item" key={nextItem.slideNumber}>
                    <Image 
                      className="img-fluid d-block"
                      fileName={nextItem.imageFileName}
                      alt={ nextItem.imageAlt }
                    />
                  </div> // carousel-item
                ))
              ) : null
            } */}
             {/* nextItems.map */}
          </div> {/* carousel-inner */}
        </div> {/* carousel slide */}
        {/* <a className="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a> */}
      </Modal.Body>
      {/* PREVIOUS MODAL FOOTER */}
      {/* MODAL FOOTER FROM CSS TRICKS EXAMPLE */}
      {/* <Modal.Footer>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </Modal.Footer> */}
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
  highlights: PropTypes.object,
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
  highlights: null,
};



export default PhotoDetailDialog;
