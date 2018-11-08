import * as actionTypes from '../actions/actions';

const initialState = {
  blogList: [],
};

export default (state = initialState, action) => {
  if (action.type === actionTypes.GET_BLOG_LIST) {
    console.log('fired');
    return {
      ...state,
      blogList: action.value.blogList,
    };
  }

  return state;
};
