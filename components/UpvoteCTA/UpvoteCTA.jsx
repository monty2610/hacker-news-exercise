import React from 'react';
import PropTypes from 'prop-types';

const UpvoteCTA = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    <img src="/icons/triangle.svg" alt="upvote icon" />
    <style jsx>
      {`
        button {
          border: none;
          background: transparent;
          padding: 0;
        }

        img {
          width: 20px;
          height: 15px;
        }
      `}
    </style>
  </button>
);

UpvoteCTA.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UpvoteCTA;
