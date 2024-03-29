import React from 'react';
import useApp from '../App/useApp';
import Post from '../Post/Post';
import MorePost from '../MorePost/MorePost';
import constants from '../../constants';

const learnMoreKey = 'learnMore';

const PostList = () => {
  const { posts } = useApp();
  return (
    <ul>
      {posts.map((post) => (
        <React.Fragment key={post.objectID}>
          {!post.isHidden && (
            <li>
              <Post post={post} />
            </li>
          )}
        </React.Fragment>
      ))}
      <li key={learnMoreKey}>
        <MorePost />
      </li>
      <style jsx>
        {`
          li {
            display: flex;
            flex-direction: column;
            background: #f6f6ef;
            padding: 5px 0;
          }

          li:nth-child(odd) {
            background: #e6e6df;
          }

          @media only screen and (${constants.MEDIA_QUERY_LRG}) {
            li {
              flex-direction: row;
            }
          }
        `}
      </style>
    </ul>
  );
};

export default PostList;
