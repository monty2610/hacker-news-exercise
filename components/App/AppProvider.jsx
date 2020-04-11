import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POST_SUCCESS':
      return {
        posts: [...state.posts, ...action.posts],
        page: action.page,
        fetchLatest: action.fetchLatest || false,
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: action.posts,
      };
    case 'RESET':
      return {
        ...state,
        posts: [],
        page: 1,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children, posts = [] }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts,
    page: 1,
    fetchLatest: false,
  });

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AppProvider;
