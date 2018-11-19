import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import resumeReducer from './resumeReducer';

export default combineReducers({
  blog: blogReducer,
  resume: resumeReducer,
});
