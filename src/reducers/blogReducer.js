import * as actionTypes from '../data/consts/blogAction';

const initialState = {
  blogList: [],
};

export default (state = initialState, action) => {
  if (action.type === actionTypes.GET_BLOG_LIST) {
    return {
      ...state,
      blogList: action.value.blogList,
    };
  }

  return state;
};
