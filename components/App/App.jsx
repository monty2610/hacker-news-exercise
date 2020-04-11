import React from 'react';
import PropTypes from 'prop-types';
import AppProvider from './AppProvider';
import Heading from '../Heading/Heading';
import PostList from '../PostList/PostList';

export const App = ({ posts }) => (
  <AppProvider posts={posts}>
    <Heading />
    <PostList />
  </AppProvider>
);

App.propTypes = {
  posts: PropTypes.shape([]).isRequired,
};

export default App;
