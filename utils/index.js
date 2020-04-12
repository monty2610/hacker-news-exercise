import fetch from 'isomorphic-unfetch';
import { getItem, setItem } from './storage';

const UPDATED_POST_KEY = 'updatedPost';
const SEARCH_URL = 'https://hn.algolia.com/api/v1/search?tags=story';
const SEARCH_BY_DATE_URL =
  'https://hn.algolia.com/api/v1/search_by_date?tags=story';

export const mergePostsWithUpdate = (posts) => {
  const updatedPosts = getItem(UPDATED_POST_KEY);
  return posts.map((post) => {
    if (updatedPosts[post.objectID]) {
      const { points, isHidden = false } = updatedPosts[post.objectID];
      return { ...post, points, isHidden };
    }
    return post;
  });
};

export const getPosts = async ({ fetchLatest = false, page = 1 } = {}) => {
  const url = `${fetchLatest ? SEARCH_BY_DATE_URL : SEARCH_URL}&page=${page}`;
  const response = await fetch(url);
  const { hits } = await response.json();
  return mergePostsWithUpdate(hits);
};

const updatePost = (objectID, keyToUpdate, value) => {
  let updatedPosts = getItem(UPDATED_POST_KEY);

  updatedPosts = {
    ...updatedPosts,
    [objectID]: {
      [keyToUpdate]: value,
    },
  };

  setItem(UPDATED_POST_KEY, updatedPosts);
};

export const updatePoints = (objectID, points) => {
  try {
    updatePost(objectID, 'points', points);
  } catch (err) {
    console.log('updatePoints::', err);
    throw err;
  }
};

export const hidePost = (objectID) => {
  try {
    updatePost(objectID, 'isHidden', true);
  } catch (err) {
    console.log('hidePost::', err);
    throw err;
  }
};
