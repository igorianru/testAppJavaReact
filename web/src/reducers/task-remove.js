import {
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE
} from '../actions/task'

const initialState = {
  tasks: [],
  isFetched: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        isFetched: true
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        isFetched: false
      };

    case DELETE_TASK_FAILURE:
      return {
        ...state,
        isFetched: false
      };

    default:
      return state
  }
}
