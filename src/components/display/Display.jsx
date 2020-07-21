import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, followerCount, followingCount, githubLink }) => (
  <p>
    { `Name: ${name} - Follower Count: ${followerCount} - Following Count: ${followingCount} - Github Link: ${githubLink}` }
  </p>
);

Display.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired  
};

export default Display;
