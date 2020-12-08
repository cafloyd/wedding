import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    teamMember
  } = frontmatter;

  const copiedToClipboard= () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor
    );
  }

  return (
    <div>
      <PageSection className={className} id={anchor}>
        <Notifications options={{zIndex: 200, top: '50px'}} />
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={8} className="mx-auto text-center">
            <p className="large text-muted">
              In lieu of a gift, we would love for you to treat yourself to a bottle of Champagne, or your drink of choice, to honor the start of our marriage. Feel free to send us a selfie, or use 
                <CopyToClipboard text="#CaitlinAndJustin2020">
                  <button
                    type="button"
                    onClick={copiedToClipboard}
                    className="invisibleButton text-muted"
                  >
                    <b>#caitlinandjustin2020</b>

                  </button>
                </CopyToClipboard>
               on social media!
              </p>
            <p className="large text-muted">If you are feeling moved by the spirit of the giving season, we would love for you to consider donating to <a href="https://nscphila.org/donate" target="_blank" rel="noreferrer">Nationalities Service Center</a> (where Caitlin used to work!), the <a href="https://secure.aspca.org/donate/donate-202011-mwdr1-t1-p1?ms=wb_top_homepage-donate&initialms=wb_top_homepage-donate&pcode=WEBMEMBER&lpcode=WEBGUARD" target="_blank" rel="noreferrer">American Society for the Prevention of Cruelty to Animals</a>, or <a href="https://dccentralkitchen.org/donate/" target="_blank" rel="noreferrer">DC Central Kitchen</a>.</p>
          </Col>
        </Row>
        <Row>
          {teamMember.map(({ header, ...tmProps }) => (
            <Col sm={4} key={header}>
              <TeamMember header={header} {...tmProps} />
            </Col>
          ))}
        </Row>
      </PageSection>
    </ div>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
