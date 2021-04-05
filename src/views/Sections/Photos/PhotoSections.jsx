/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Button } from "react-bootstrap";
import PhotoItem from "components/PhotoItem";
import "./Photos.scss";

class PhotoSections extends Component {
  constructor() {
    super();

    this.state = {
      showGettingReady: false,
      showFirstLook: false,
      showCeremony: false,
      showPortraits: false,
      showReception: false,
      showFamilyPortraits: false,
    };
    this.toggleGettingReady = this.toggleGettingReady.bind(this);
    this.toggleFirstLook = this.toggleFirstLook.bind(this);
    this.toggleCeremony = this.toggleCeremony.bind(this);
    this.togglePortraits = this.togglePortraits.bind(this);
    this.toggleReception = this.toggleReception.bind(this);
    this.toggleFamilyPortraits = this.toggleFamilyPortraits.bind(this);
  }

  toggleGettingReady() {
    this.setState({
      showGettingReady: !this.state.showGettingReady,
      showFirstLook: false,
      showCeremony: false,
      showPortraits: false,
      showReception: false,
      showFamilyPortraits: false,
    })
  }

  toggleFirstLook() {
    this.setState({
      showGettingReady: false,
      showFirstLook: !this.state.showFirstLook,
      showCeremony: false,
      showPortraits: false,
      showReception: false,
      showFamilyPortraits: false,
    })
  }

  toggleCeremony() {
    this.setState({
      showGettingReady: false,
      showFirstLook: false,
      showCeremony: !this.state.showCeremony,
      showPortraits: false,
      showReception: false,
      showFamilyPortraits: false,
    })
  }

  togglePortraits() {
    this.setState({
      showGettingReady: false,
      showFirstLook: false,
      showCeremony: false,
      showPortraits: !this.state.showPortraits,
      showReception: false,
      showFamilyPortraits: false,
    })
  }

  toggleReception() {
    this.setState({
      showGettingReady: false,
      showFirstLook: false,
      showCeremony: false,
      showPortraits: false,
      showReception: !this.state.showReception,
      showFamilyPortraits: false,
    })
  }

  toggleFamilyPortraits() {
    this.setState({
      showGettingReady: false,
      showFirstLook: false,
      showCeremony: false,
      showPortraits: false,
      showReception: false,
      showFamilyPortraits: !this.state.showFamilyPortraits,
    })
  }
  

  render() {
    // FOR TEMPLATE: add "subheader: rootSubHeader" inside const below:
    const { gettingReady, firstLook, ceremony, portraits, reception, familyPortraits } = this.props;
    if (this.state.showGettingReady){
        return (
            <div>
                <Row className="justify-content-center">
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleGettingReady}>
                        <p className="buttonTitle">Getting Ready ^</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFirstLook}>
                        <p className="buttonTitle">First Look v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleCeremony}>
                        <p className="buttonTitle">Ceremony v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.togglePortraits}>
                        <p className="buttonTitle">Portraits v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleReception}>
                        <p className="buttonTitle">Reception v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFamilyPortraits}>
                        <p className="buttonTitle">Family Portraits v</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {gettingReady.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        gettingReady={gettingReady}
                    />
                    ),
                )}
                </Row>
            </div> 
        )
    }
    if (this.state.showFirstLook){
        return (
            <div>
                <Row className="justify-content-center">
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleGettingReady}>
                        <p className="buttonTitle">Getting Ready v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleFirstLook}>
                        <p className="buttonTitle">First Look ^</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleCeremony}>
                        <p className="buttonTitle">Ceremony v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.togglePortraits}>
                        <p className="buttonTitle">Portraits v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleReception}>
                        <p className="buttonTitle">Reception v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFamilyPortraits}>
                        <p className="buttonTitle">Family Portraits v</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {firstLook.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        firstLook={firstLook}
                    />
                    ),
                )}
                </Row>
            </div> 
        )
    }
    if (this.state.showCeremony){
        return (
            <div>
                <Row className="justify-content-center">
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleGettingReady}>
                        <p className="buttonTitle">Getting Ready v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFirstLook}>
                        <p className="buttonTitle">First Look v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleCeremony}>
                        <p className="buttonTitle">Ceremony ^</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.togglePortraits}>
                        <p className="buttonTitle">Portraits v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleReception}>
                        <p className="buttonTitle">Reception v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFamilyPortraits}>
                        <p className="buttonTitle">Family Portraits v</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {ceremony.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        ceremony={ceremony}
                    />
                    ),
                )}
                </Row>
            </div> 
        )
    }
    if (this.state.showPortraits){
        return (
            <div>
                <Row className="justify-content-center">
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleGettingReady}>
                        <p className="buttonTitle">Getting Ready v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFirstLook}>
                        <p className="buttonTitle">First Look v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleCeremony}>
                        <p className="buttonTitle">Ceremony v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.togglePortraits}>
                        <p className="buttonTitle">Portraits ^</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleReception}>
                        <p className="buttonTitle">Reception v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFamilyPortraits}>
                        <p className="buttonTitle">Family Portraits v</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {portraits.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        portraits={portraits}
                    />
                    ),
                )}
                </Row>
            </div> 
        )
    }
    if (this.state.showReception){
        return (
            <div>
                <Row className="justify-content-center">
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleGettingReady}>
                        <p className="buttonTitle">Getting Ready v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFirstLook}>
                        <p className="buttonTitle">First Look v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleCeremony}>
                        <p className="buttonTitle">Ceremony v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.togglePortraits}>
                        <p className="buttonTitle">Portraits v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleReception}>
                        <p className="buttonTitle">Reception ^</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFamilyPortraits}>
                        <p className="buttonTitle">Family Portraits v</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {reception.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        reception={reception}
                    />
                    ),
                )}
                </Row>
            </div> 
        )
    }
    if (this.state.showFamilyPortraits){
        return (
            <div>
                <Row className="justify-content-center">
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleGettingReady}>
                        <p className="buttonTitle">Getting Ready v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFirstLook}>
                        <p className="buttonTitle">First Look v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleCeremony}>
                        <p className="buttonTitle">Ceremony v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.togglePortraits}>
                        <p className="buttonTitle">Portraits v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleReception}>
                        <p className="buttonTitle">Reception v</p>
                    </Button> 
                    <Button size="xl" variant="primary" className="text-uppercase main-button show-hide selected" onClick={this.toggleFamilyPortraits}>
                        <p className="buttonTitle">Family Portraits ^</p>
                    </Button> 
                    <br/>
                </Row>
                <Row id="gallery" data-toggle="modal" data-target="#photoGallery">
                {familyPortraits.map(
                    ({ slideNumber, imageFileName, imageFileNameDetail }) => (
                    <PhotoItem
                        key={slideNumber}
                        imageFileName={imageFileName}
                        imageFileNameDetail={imageFileNameDetail}
                        familyPortraits={familyPortraits}
                    />
                    ),
                )}
                </Row>
            </div> 
        )
    }
    return (
        <Row className="justify-content-center">
            <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleGettingReady}>
                <p className="buttonTitle">Getting Ready v</p>
            </Button> 
            <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFirstLook}>
                <p className="buttonTitle">First Look v</p>
            </Button> 
            <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleCeremony}>
                <p className="buttonTitle">Ceremony v</p>
            </Button> 
            <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.togglePortraits}>
                <p className="buttonTitle">Portraits v</p>
            </Button> 
            <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleReception}>
                <p className="buttonTitle">Reception v</p>
            </Button> 
            <Button size="xl" variant="primary" className="text-uppercase main-button show-hide" onClick={this.toggleFamilyPortraits}>
                <p className="buttonTitle">Family Portraits v</p>
            </Button> 
            <br/>
        </Row>
    )
}}


PhotoSections.propTypes = {
  gettingReady: PropTypes.object,
  firstLook: PropTypes.object,
  ceremony: PropTypes.object,
  portraits: PropTypes.object, 
  reception: PropTypes.object,
  familyPortraits: PropTypes.object, 
};

PhotoSections.defaultProps = {
    gettingReady: null,
    firstLook: null,
    ceremony: null,
    portraits: null,
    reception: null,
    familyPortraits: null,
};

export default PhotoSections;