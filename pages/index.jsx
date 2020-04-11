import React from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../utils';
import AppComponent from '../components/App/App';
import Layout from '../components/Layout/Layout';

const Index = ({ posts }) => (
  <Layout>
    <AppComponent posts={posts} />
  </Layout>
);

Index.propTypes = {
  posts: PropTypes.shape([]),
};

Index.defaultProps = {
  posts: [],
};

export const getServerSideProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Index;
