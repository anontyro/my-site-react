import React from 'react';
import * as actions from '../../data/consts/blogAction';
import BaseApiHandler from '../../services/Api/BaseApiHandler';

const getBlogList = (list) => {
  return {
    type: actions.GET_BLOG_LIST,
    value: list,
  }
};

export const fetchBlogList = () => {
  const apiHandler = new BaseApiHandler();

  try {
    const response = apiHandler.getBlogList();
    return dispatch => dispatch(getBlogList(response));
  } catch (err) {
    return console.error(err);
  }
};
