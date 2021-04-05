import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";
import "./Top.scss";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  const extraInfoPart = (
    <div className="buttonsWrapper">
      <a
        href="https://www.youtube.com/watch?v=EXOL-3JyXMI&t=3660s"
        target="_blank"
        rel="noreferrer"
        className="individButtonWrapper"
      >
        <Button size="xl" variant="primary" className="text-uppercase main-button hero-button">
          <p className="buttonTitle">Watch the Ceremony</p>
        </Button>
      </a>
      <div className="individButtonWrapper">
        <Button size="xl" variant="primary" className="text-uppercase main-button hero-button" onClick={scrollToSection}>
          <p className="buttonTitle">See the Pictures</p>
        </Button>
      </div>
    </div>
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
