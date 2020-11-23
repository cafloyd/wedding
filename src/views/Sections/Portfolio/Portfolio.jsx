import React from "react";
// import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from 'react-countdown';


import { Row, Col } from "react-bootstrap";
// import SectionHeader from "components/SectionHeader";
// import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const Completionist = () => <span>You are good to go!</span>;
      
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } 
      // Render a countdown
      return <span>{days} days, {hours} hours, {minutes} minutes, and {seconds} seconds to go!</span>;
  };

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          {/* <p className="text-muted mb-5">{subheader}</p> */}
          <p className="text-muted mb-5">
            <Countdown
              date='2020-12-13T14:00:00-05:00'
              renderer={renderer}
            />
        </p>
        </Col>
      </Row>
      {/* <Row>
        <Countdown
          date='2020-12-13T14:00:00-05:00'
          renderer={renderer}
        />
      </Row> */}
      <div />
      <Row>
            <div
          className="videoWrapper"
          // paddingBottom="50%"
          // width="100%"
        >
          <iframe 
            // style= {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}
            // width="100%" 
            width="560" 
            // height="100%" 
            height="349" 
            // position="absolute"
            src="https://www.youtube.com/embed/S1IPBRd84ws" 
            title="ceremony" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            />
        </div>
      </Row>
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
