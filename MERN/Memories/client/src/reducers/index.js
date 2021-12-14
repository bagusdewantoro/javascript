import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({
  // posts: posts,
  posts, // since key and value are the same
});
