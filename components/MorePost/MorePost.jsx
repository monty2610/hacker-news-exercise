import React from 'react';
import useApp from '../App/useApp';
import constants from '../../constants';

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
          }

          @media only screen and (${constants.MEDIA_QUERY_LRG}) {
            button {
              margin-left: 150px;
            }
          }
        `}
      </style>
    </button>
  );
};

export default MorePost;
