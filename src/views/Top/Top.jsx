import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <div className="buttonsWrapper">
        <Button size="xl" variant="primary" className="text-uppercase main-button" onClick={scrollToSection}>
          <p className="buttonTitle">Watch the Ceremony</p> <br />
          <p className="buttonSubtitle">Dec. 13, 2pm EST</p>
          {/* <p className="buttonTitle">{jumpToAnchorText}</p> <br />
          <p className="buttonSubtitle">Dec. 13, 2pm EST</p> */}
        </Button>
        {/* <Button size="xl" variant="primary" className="text-uppercase main-button" onClick={scrollToSection}>
          <p className="buttonTitle">Sign our Virtual Guestbook</p> 
        </Button> */}
      </div>
    );
  }

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
