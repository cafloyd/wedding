import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./Charity.scss";

const Charity = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  social: { twitter, facebook, linkedin, github, medium, instagram, website},
}) => {
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;
  const instagramPart = instagram ? <SocialIcons.Instagram userName={instagram} /> : null;
  const websitePart = website ? <SocialIcons.Website userName={website} /> : null;

  return (
    <div className="team-member">
      <a 
        href={website}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="mx-auto circle rounded-circle"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
      </a>
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
      <div>
        {websitePart}
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
        {instagramPart}
      </div>
    </div>
  );
};

Charity.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
    instagram: PropTypes.string,
    website: PropTypes.string,
  }),
};

Charity.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  social: {
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
    instagram: null,
    website: null,
  },
};

export default Charity;
