import { useContext } from 'react';
import { AppContext } from './AppProvider';
import { fetchPostSuccess, updatePost, reset } from './actions';
import {
  getPosts,
  updatePoints,
  hidePost,
  mergePostsWithUpdate,
} from '../../utils';

export const useApp = () => {
  const [state, dispatch] = useContext(AppContext);

  const fetchNextPost = async () => {
    let { page } = state;
    const { fetchLatest } = state;
    page += 1;
    const posts = await getPosts({ page, fetchLatest });
    dispatch(fetchPostSuccess(posts, page, fetchLatest));
  };

  const fetchLatestPost = async () => {
    dispatch(reset());
    const posts = await getPosts({ fetchLatest: true, page: 1 });
    dispatch(fetchPostSuccess(posts, 1, true));
  };

  const fetchTopPost = async () => {
    dispatch(reset());
    const posts = await getPosts({ fetchLatest: false, page: 1 });
    dispatch(fetchPostSuccess(posts, 1, false));
  };

  const upvote = (objectID, points) => {
    updatePoints(objectID, points + 1);
    const posts = mergePostsWithUpdate(state.posts);
    dispatch(updatePost(posts));
  };

  const hide = (objectID) => {
    hidePost(objectID);
    const posts = mergePostsWithUpdate(state.posts);
    dispatch(updatePost(posts));
  };

  return {
    posts: state.posts,
    fetchLatest: state.fetchLatest,
    fetchNextPost,
    fetchLatestPost,
    fetchTopPost,
    upvote,
    hide,
  };
};

export default useApp;
