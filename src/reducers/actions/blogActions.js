import * as actions from '../../data/consts/blogAction';
import BaseApiHandler from '../../services/Api/BaseApiHandler';

// eslint-disable-arrow-body-style
// eslint-disable-next-line
export const getBlogList = (list) => {
  return {
    type: actions.GET_BLOG_LIST,
    value: list,
  };
};

export const fetchBlogList = async () => {
  const apiHandler = new BaseApiHandler();

  try {
    const response = await apiHandler.getBlogList();
    console.log(response);
    return dispatch => dispatch(getBlogList(response));
  } catch (err) {
    return console.error(err);
  }
};
