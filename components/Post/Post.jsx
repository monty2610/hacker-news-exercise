import React from 'react';
import PropTypes from 'prop-types';
import useApp from '../App/useApp';
import UpvoteCTA from '../UpvoteCTA/UpvoteCTA';
import PostedAt from '../PostedAt/PostedAt';

const Post = ({ post }) => {
  const { upvote, hide } = useApp();
  const {
    url,
    objectID,
    points,
    isHidden,
    num_comments,
    title,
    author,
    created_at,
  } = post;
  let domain = '';

  try {
    const postURL = new URL(url);
    domain = postURL.hostname;
  } catch (err) {
    console.log('POST::', err);
  }

  const handleUpvote = (evt) => {
    evt.preventDefault();
    upvote(objectID, points);
  };

  const hidePost = (evt) => {
    evt.preventDefault();
    hide(objectID);
  };

  if (isHidden) {
    return null;
  }

  return (
    <li key={objectID}>
      <span>{num_comments}</span>
      <span>{points}</span>
      <UpvoteCTA onClick={handleUpvote} />
      <span>{title}</span>
      {domain && <span>{domain}</span>}
      <span>by</span>
      <span>{author}</span>
      <PostedAt createdDate={created_at} />
      <span>
        {'[ '}
        <button type="button" onClick={hidePost}>
          hide
        </button>
        {' ]'}
      </span>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    num_comments: PropTypes.number,
    url: PropTypes.string,
    objectID: PropTypes.string,
    points: PropTypes.number,
    isHidden: PropTypes.bool,
    title: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
};

export default Post;
