import React from 'react';
import useApp from '../App/useApp';
import Post from '../Post/Post';
import MorePost from '../MorePost/MorePost';

const PostList = () => {
  const { posts } = useApp();
  return (
    <ul>
      {posts.map((post) => (
        <Post post={post} />
      ))}
      <MorePost />
    </ul>
  );
};

export default PostList;
