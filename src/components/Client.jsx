import React from "react";
// import PropTypes from "prop-types";
import "../style/core.scss"

// import Image from "components/Image";

const Client = () => {
  const liveStream = (
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
  );

  return liveStream;
};

// Client.propTypes = {
//   // imageFileName: PropTypes.string.isRequired,
//   // href: PropTypes.string,
//   videoEmbed: PropTypes.string.isRequired
// };

// Client.defaultProps = {
//   href: null,
// };

export default Client;
