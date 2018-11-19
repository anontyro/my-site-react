import * as actionTypes from '../data/consts/resumeAction';

const initalState = {
  currentResume: {},
  resumeList: [],
};

export default (state = initalState, action) => {
  if (action.type === actionTypes.GET_RESUME_DETAILS) {
    return {
      ...state,
      currentResume: action.value.currentResume,
    };
  }
  if (action.type === actionTypes.GET_RESUME_LIST) {
    return {
      ...state,
      resumeList: action.value.resumeList,
    };
  }
  return state;
};
