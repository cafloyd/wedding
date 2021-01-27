import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Notifications, { notify } from "react-notify-toast";


import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Youtube from "content/assets/images/portfolio/Youtube.png";
import YoutubeHover from "content/assets/images/portfolio/YoutubeHover.png";
import "./Ceremony.scss";

const Ceremony = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const copiedToClipboard= () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor
    );
  }

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">
            The ceremony is now live!
          </div>
          <div className="joinButtonWrapper">
            <div>
              <a
                href="https://youtu.be/EXOL-3JyXMI"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                  <p className="buttonTitle">Join Now!</p>
                </Button> <br/>
              </a>
            </div>
          </div> {/* joinButtonWrapper */}
          <div className="vendors">
            <p>
              Hosted at
              <a
                href="https://www.strathmore.org/mansion"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                the Mansion at Strathmore
              </a>
            </p>
            <p>
              Officiated by 
              <a 
                href="https://elleweds.wixsite.com/elleweds"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer">
                  Erren Lee
              </a>
            </p>
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
              Photos by
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
          </div> {/* vendors */}
      </span> // finishedCountdown
    )
  }

      
  const renderer = () => {
      return <Completionist />;
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("ceremony-section", className)} id={anchor}>
        <Notifications options={{zIndex: 200, top: '50px'}} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader}/>
            <div className="joinButtonWrapper">
              <div>
                <a
                  href="https://www.youtube.com/watch?v=EXOL-3JyXMI&t=3660s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                    <p className="buttonTitle">Watch the Ceremony</p>
                  </Button> <br/>
                </a>
              </div>
            </div> {/* joinButtonWrapper */}
        </Row>
        <div className="countdownAndVideoDiv">
          <Row className="vendorDiv">
            <span className="finishedCountdown">
              
              <div className="vendors">
                <p className="singleVendor">
                  Hosted at
                  <a
                    href="https://www.strathmore.org/mansion"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    the Mansion at Strathmore
                  </a>
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  Officiated by 
                  <a 
                    href="https://elleweds.wixsite.com/elleweds"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer">
                      Elle is for Love
                  </a>
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  Music provided by
                  <a
                    href="http://cellobosco.com/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Carol Anne Bosco
                  </a>
                  &nbsp;and
                  <a
                    href="https://nickmontopoli.com/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nick Montopoli
                  </a>
                </p> {/* singleVendor */}
                <p className="singleVendor">
                  Photos by
                  <a
                    href="https://anaisabelphotography.com/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ana Isabel Photography
                  </a>
                </p> {/* singleVendor */}
              </div> {/* vendors */}
            </span> {/* finished countdown */}
          </Row> {/* vendorDiv */}
          <Row className="videoDiv">
            <a
              href="https://www.youtube.com/watch?v=EXOL-3JyXMI&t=3660s"
              target="_blank"
              rel="noreferrer"
              className="youtubeLink"
            >
              <div
                className="container"
              >
                <img 
                  src={Youtube} 
                  alt="youtubeLink" 
                  className="image"
                  width="560" 
                  height="auto"
                />
                <div className="middle">
                  <img 
                    src={YoutubeHover} 
                    alt="youtubeLink" 
                    className="imageHover"
                    width="560" 
                    height="auto"
                  />
                </div> {/* middle */}
              </div> {/* container */}
            </a>
          </Row> {/* videoDiv */}
        </div> {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Ceremony.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Ceremony.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Ceremony;
