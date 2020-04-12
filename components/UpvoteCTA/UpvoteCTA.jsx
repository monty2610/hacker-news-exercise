import React from 'react';
import PropTypes from 'prop-types';

const UpvoteCTA = ({ onClick }) => (
  <button type="button" onClick={onClick} aria-label="upvote this post">
    <img src="/icons/triangle.svg" alt="upvote icon" />
    <style jsx>
      {`
        button {
          padding-left: 4px;
        }

        img {
          width: 8px;
          fill: #999;
        }
      `}
    </style>
  </button>
);

UpvoteCTA.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UpvoteCTA;
