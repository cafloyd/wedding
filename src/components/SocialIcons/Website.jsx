import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Website = ({ userName }) => (
  <CircleIcon href={`${userName}`} iconName="WebsiteIcon" />
);

Website.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Website;
