import React from 'react';
import useApp from '../App/useApp';

const Heading = () => {
  const { fetchLatest, fetchLatestPost, fetchTopPost } = useApp();

  const topClickHandler = (evt) => {
    evt.preventDefault();
    if (fetchLatest) {
      fetchTopPost();
    }
  };

  const newClickHandler = (evt) => {
    evt.preventDefault();
    if (!fetchLatest) {
      fetchLatestPost();
    }
  };

  return (
    <h2>
      <button
        type="button"
        onClick={topClickHandler}
        className={fetchLatest ? '' : 'active'}
      >
        top
      </button>
      <span> | </span>
      <button
        type="button"
        onClick={newClickHandler}
        className={fetchLatest ? 'active' : ''}
      >
        new
      </button>
      <style jsx>
        {`
          button {
            border: none;
            background: transparent;
            font-size: 12px;
          }

          .active {
            color: #fff;
          }
        `}
      </style>
    </h2>
  );
};

export default Heading;
