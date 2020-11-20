import React from "react";
// import PropTypes from "prop-types";

import Image from "components/Image";

const Client = () => {
  const imgPart = (
   <iframe 
   style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/S1IPBRd84ws" 
    title="ceremony" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen />
  );

  return imgPart;
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
