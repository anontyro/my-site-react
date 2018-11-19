import * as actions from '../../data/consts/blogAction';
import BaseApiHandler from '../../services/Api/BaseApiHandler';

// eslint-disable-arrow-body-style
// eslint-disable-next-line
const fetchedBlogList = (list) => {
  console.log(list);
  return {
    type: actions.GET_BLOG_LIST,
    value: list,
  };
};

export const fetchBlogList = () => {
  const apiHandler = new BaseApiHandler();

  return async (dispatch) => {
    try {
      const response = await apiHandler.getBlogList();
      dispatch(fetchedBlogList(response));
    } catch (err) {
      console.error(err);
    }
  };
};
