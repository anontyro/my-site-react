import * as actions from '../../data/consts/resumeAction';
import BaseApiHandler from '../../services/Api/BaseApiHandler';

// eslint-disable-arrow-body-style
// eslint-disable-next-line
const fetchedCurrentResume = (resume) => {
  return {
    type: actions.GET_RESUME_DETAILS,
    value: resume,
  };
};

export const fetchCurrentResume = () => {
  const apiHandler = new BaseApiHandler();

  return async (dispatch) => {
    try {
      const response = await apiHandler.getCurrentResume();
      dispatch(fetchedCurrentResume(response));
    } catch (err) {
      console.error(err);
    }
  };
};
