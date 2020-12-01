import React from "react";
// import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from 'react-countdown';


import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
// import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <SectionHeader className="finishedHeader" header="The ceremony will begin in"/>
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  0 
                </div>
                <div className="unit">
                  days
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  0 
                </div>
                <div className="unit">
                  hours
                </div>
              </div>
            </div>
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  0 
                </div>
                <div className="unit">
                  minutes
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  0
                </div>
                <div className="unit">
                  seconds
                </div>
              </div>
            </div>
          </div>
        <h3 className="countdownEnd">
          Ceremony is now live!
        </h3>
      </span>
    )
  }

  const Soon = () => {
    return (
        <div className="startingSoon">
          <h3>Video is now streaming!</h3>
        </div>
    )
  }
      
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } 
    if ((days === 0 && hours === 0 && minutes === 10 && seconds === 0) || (days === 0 && hours === 0 && minutes < 10)) {
      return <div>
        <SectionHeader header="The ceremony will begin in"/>
        <div className="countdownWrapper">
          <div className="countdownSection">
            <div className="countWrapper">
              <div className="count">
                {days} 
              </div>
              <div className="unit">
                days
              </div>
            </div>
            <div className="countWrapper">
              <div className="count">
                {hours} 
              </div>
              <div className="unit">
                hours
              </div>
            </div>
          </div>
          <div className="countdownSection">
            <div className="countWrapper">
              <div className="count">
                {minutes} 
              </div>
              <div className="unit">
                minutes
              </div>
            </div>
            <div className="countWrapper">
              <div className="count">
                {seconds} 
              </div>
              <div className="unit">
                seconds
              </div>
            </div>
          </div>
        </div>
        <Soon />
      </div>
    }
    // Render a countdown
    return <span>
        <div className="countdownAndTanuki">
          <SectionHeader header="The ceremony will begin in"/>
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {days} 
                </div>
                <div className="unit">
                  days
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  {hours} 
                </div>
                <div className="unit">
                  hours
                </div>
              </div>
            </div>
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {minutes} 
                </div>
                <div className="unit">
                  minutes
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  {seconds} 
                </div>
                <div className="unit">
                  seconds
                </div>
              </div>
            </div>
          </div>
          <div className="instaWrapper">
            <p>
              Check out 
              <a 
                href="https://www.instagram.com/princess_tanuki/"
                className="tanukiInsta"
                target="_blank"
                rel="noreferrer"
              >
                  Tanuki&apos;s Instagram
              </a>
              while you wait!
            </p>
          </div>
        </div>
      </span>;
  };

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row className="justify-content-center">
        <SectionHeader header={header} subheader={subheader}/>
      </Row>
      <div className="countdownAndVideoDiv">
        <Row>
          <Countdown
            date='2020-12-13T14:00:00-05:00'
            // date='2020-11-29T20:42:00-05:00'
            renderer={renderer}
          />
        </Row>
        <Row>
          <div
            className="videoWrapper"
          >
            <iframe 
              width="560" 
              height="349" 
              
              src="https://www.youtube.com/embed/S1IPBRd84ws" 
              title="ceremony" 
              className="video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              />
          </div>
        </Row>
      </div>
    </PageSection>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
