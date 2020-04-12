import React from 'react';
import PropTypes from 'prop-types';
import useApp from '../App/useApp';
import UpvoteCTA from '../UpvoteCTA/UpvoteCTA';
import PostedAt from '../PostedAt/PostedAt';
import constants from '../../constants';

const Post = ({ post }) => {
  const { upvote, hide } = useApp();
  const {
    url,
    objectID,
    points,
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

  return (
    <>
      <div className="column">
        <span className="num left">{num_comments}</span>
        <span className="num">
          {points}
          <UpvoteCTA onClick={handleUpvote} />
        </span>
      </div>
      <div className="column largeText smallPaddingLeft">{title}</div>
      <div className="column smallText smallPaddingLeft author">
        {domain && <span className="secondary bold">{`(${domain})`}</span>}
        <span className="secondary smallMarginLeft">by</span>
        <span className="primary smallMarginLeft bold">{author}</span>
      </div>
      <div className="column smallText smallPaddingLeft">
        <PostedAt createdDate={created_at} />
        <button type="button" onClick={hidePost} className="hideCTA">
          [ hide ]
        </button>
      </div>
      <style jsx>
        {`
          .column {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            padding: 0 5px;
          }

          .author {
            justify-content: flex-end;
          }

          .num {
            font-size: 10px;
            min-width: 75px;
            text-align: right;
          }

          .left {
            text-align: left;
          }

          .smallMarginLeft {
            margin-left: 5px;
          }

          .hideCTA {
            margin-left: 5px;
          }

          @media only screen and (${constants.MEDIA_QUERY_LRG}) {
            .column {
              margin-bottom: 0;
              padding: 0;
            }

            .left {
              text-align: right;
            }

            .smallPaddingLeft {
              padding-left: 5px;
            }

            .author {
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
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
