import React from 'react';
import useApp from '../App/useApp';

const MorePost = () => {
  const { fetchNextPost } = useApp();

  const handleMoreClick = (evt) => {
    evt.preventDefault();
    fetchNextPost();
  };

  return (
    <button type="button" onClick={handleMoreClick}>
      More
      <style jsx>
        {`
          button {
            color: #fc6500;
            margin-left: 150px;
          }
        `}
      </style>
    </button>
  );
};

export default MorePost;
