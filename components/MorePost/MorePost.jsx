import React from 'react';
import useApp from '../App/useApp';

const MorePost = () => {
  const { fetchNextPost } = useApp();

  const handleMoreClick = (evt) => {
    evt.preventDefault();
    fetchNextPost();
  };

  return (
    <li>
      <button type="button" onClick={handleMoreClick}>
        More
      </button>
    </li>
  );
};

export default MorePost;
