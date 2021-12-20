import { combineReducers } from 'redux';

import { myPost } from './posts';

export default combineReducers({
  myPostData: myPost
});
