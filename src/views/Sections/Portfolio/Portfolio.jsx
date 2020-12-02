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
        <div className="countdownIntro">
            The ceremony is now live!
          </div>
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
        <p>
          Music provided by
          <a
            href="http://cellobosco.com/"
            className="countdownLinks"
            target="_blank"
            rel="noreferrer"
          >
            Carol Anne Bosco
          </a>
        </p>
        <p>
          Officiated by 
          <a 
            href="https://elleweds.wixsite.com/elleweds"
            className="countdownLinks"
            target="_blank"
            rel="noreferrer">
              Elle is for Love
          </a>
        </p>
        <p>
          Stay tuned for photos by
          <a
            href="https://anaisabelphotography.com/"
            className="countdownLinks"
            target="_blank"
            rel="noreferrer"
          >
            Ana Isabel Photography
          </a>
          !
        </p>
      </span>
    )
  }

      
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } 
    // Render a countdown
    return <span>
        <div className="countdownAndTanuki">
          <div className="countdownIntro">
            The ceremony will begin in
          </div>
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
            <p className="checkOut">
              Check out 
              <a 
                href="https://www.instagram.com/princess_tanuki/"
                className="countdownLinks"
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
            // date='2020-12-02T12:42:00-05:00'
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
              
              src="https://www.youtube.com/embed/EXOL-3JyXMI" 
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
