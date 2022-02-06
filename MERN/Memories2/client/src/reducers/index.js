import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';

export default combineReducers({
  // posts: posts,
  posts, // since key and value are the same
  auth,
});
