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
    <nav>
      <img className="icon" src="/icons/y18.gif" alt="icon" />
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
          nav {
            background: #ff6600;
            margin: 0;
            padding: 5px 0;
          }

          .icon {
            border: 1px solid #fff;
            vertical-align: middle;
            margin: 0 10px;
            width: 12px;
          }

          button {
            font-size: 12px;
            vertical-align: middle;
          }

          span {
            font-size: 12px;
            vertical-align: middle;
          }

          .active {
            color: #fff;
          }
        `}
      </style>
    </nav>
  );
};

export default Heading;
