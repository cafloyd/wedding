import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import Countdown from 'react-countdown';
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);
 
  const renderer = ({ days }) => {
    if ( days <=0 ) {
      // Render a completed state
      return (
        <Button size="xl" variant="primary" className="text-uppercase main-button" onClick={scrollToSection}>
          <p className="buttonTitle">Watch the Ceremony</p>
        </Button>
      );
    } 
    return (
      <Popup
        modal
        trigger={
          <Button size="xl" variant="primary" className="text-uppercase main-button" onClick={scrollToSection}>
            <p className="buttonTitle">Add to Calendar</p>
          </Button>
        }
      >
        {close => (
        <div className="addToCalModal">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
          <div className="calendarHeader text-uppercase"> Add to Calendar </div>
          <div className="calendarContent">
            <div className="calendarLinksWrapper">
              <div>
                <FontAwesomeIcon icon={["fab", "google"]} className="calIcon"/>
                <a 
                  href="begin:VCALENDARVERSION:2.0BEGIN:VEVENTURL:http://localhost:8000/DTSTART:20201213T190000ZDTEND:20201213T193000ZSUMMARY:Floyd/Vazquez Wedding CeremonyDESCRIPTION:Please join our virtual ceremony at https://youtu.be/EXOL-3JyXMI and leave a comment to let us know you&apos;re there! See our website for more information: https://caitlinandjustin2020.com/LOCATION:https://youtu.be/EXOL-3JyXMIEND:VEVENTEND:VCALENDAR"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple
                </a>
              </div>
              <div>
                <a 
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20201213T190000Z/20201213T193000Z&location=https%3A%2F%2Fyoutu.be%2FEXOL-3JyXMI&text=Floyd%2FVazquez%20Wedding%20Ceremony&details=Please%20join%20our%20virtual%20ceremony%20at%20https%3A%2F%2Fyoutu.be%2FEXOL-3JyXMI%20and%20leave%20a%20comment%20to%20let%20us%20know%20you%26apos%3Bre%20there!%20See%20our%20website%20for%20more%20information%3A%20https%3A%2F%2Fcaitlinandjustin2020.com%2F"
                  target="_blank"
                  rel="noreferrer"
                >Google</a>
              </div>
              <div>
                <a 
                  href="begin:VCALENDARVERSION:2.0BEGIN:VEVENTURL:http://localhost:8000/DTSTART:20201213T190000ZDTEND:20201213T193000ZSUMMARY:Floyd/Vazquez Wedding CeremonyDESCRIPTION:Please join our virtual ceremony at https://youtu.be/EXOL-3JyXMI and leave a comment to let us know you&apos;re there! See our website for more information: https://caitlinandjustin2020.com/LOCATION:https://youtu.be/EXOL-3JyXMIEND:VEVENTEND:VCALENDAR"
                  target="_blank"
                  rel="noreferrer"
                >Outlook</a>
              </div>
              <div>
                <a 
                  href="begin:VCALENDARVERSION:2.0BEGIN:VEVENTURL:http://localhost:8000/DTSTART:20201213T190000ZDTEND:20201213T193000ZSUMMARY:Floyd/Vazquez Wedding CeremonyDESCRIPTION:Please join our virtual ceremony at https://youtu.be/EXOL-3JyXMI and leave a comment to let us know you&apos;re there! See our website for more information: https://caitlinandjustin2020.com/LOCATION:https://youtu.be/EXOL-3JyXMIEND:VEVENTEND:VCALENDAR"
                  target="_blank"
                  rel="noreferrer"
                >Outlook.com</a>
              </div>
              <div>
                <a 
                  href="https://calendar.yahoo.com/?v=60&view=d&type=20&title=Floyd%2FVazquez%20Wedding%20Ceremony&st=20201213T190000Z&dur=0:30&desc=Please%20join%20our%20virtual%20ceremony%20at%20https%3A%2F%2Fyoutu.be%2FEXOL-3JyXMI%20and%20leave%20a%20comment%20to%20let%20us%20know%20you%26apos%3Bre%20there!%20See%20our%20website%20for%20more%20information%3A%20https%3A%2F%2Fcaitlinandjustin2020.com%2F&in_loc=https%3A%2F%2Fyoutu.be%2FEXOL-3JyXMI"
                  target="_blank"
                  rel="noreferrer"
                >Yahoo</a>
              </div>
            </div>
          </div>
        </div>
        )
      }
      </Popup>
    )
  }

  const extraInfoPart = (
    <Countdown
      date='2020-12-13T14:00:00-05:00'
      renderer={renderer}
    />
  );

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
