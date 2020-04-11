export const fetchPostSuccess = (posts, page, fetchLatest) => ({
  type: 'FETCH_POST_SUCCESS',
  posts,
  page,
  fetchLatest,
});

export const updatePost = (posts) => ({
  type: 'UPDATE_POST',
  posts,
});

export const reset = () => ({
  type: 'RESET',
});
