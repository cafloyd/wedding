import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image from "components/Image";

import "./TimelineItem.scss";

const TimelineItem = ({
  invert,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
}) => {
  const headerPart = header ? <p className="timelineHeader text-uppercase">{header}</p> : null;
  const subheaderPart = subheader ? <p className="timelineSubheading text-uppercase">{subheader}</p> : null;

  const liClassName = clsx("timeline-item", { "timeline-inverted": invert });

  return (
    <li className={liClassName}>
      <div className="timeline-image">
          <Image
            className="rounded-circle img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          {headerPart}
          {subheaderPart}
        </div>
        <div className="timeline-body">
          <p className="text-muted">{content}</p>
        </div>
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  invert: PropTypes.bool,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

TimelineItem.defaultProps = {
  invert: false,
  imageFileName: "",
  imageAlt: "",
  header: "",
  subheader: "",
  content: "",
};

export default TimelineItem;
