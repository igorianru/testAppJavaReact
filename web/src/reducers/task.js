import {
  POST_TASK_REQUEST,
  POST_TASK_SUCCESS,
  POST_TASK_FAILURE
} from '../actions/task'

const initialState = {
  tasks: [],
  isFetched: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_TASK_REQUEST:
      return {
        ...state,
        isFetched: true
      };

    case POST_TASK_SUCCESS:
      return {
        ...state,
        tasks    : action.payload,
        isFetched: false
      };

    case POST_TASK_FAILURE:
      return {
        ...state,
        isFetched: false
      };

    default:
      return state
  }
}
