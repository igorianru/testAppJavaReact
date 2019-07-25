import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE
} from '../actions/list'

const initialState = {
  tasks: [],
  isFetched: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        ...state,
        isFetched: true
      };

    case GET_LIST_SUCCESS:
      return {
        ...state,
        tasks    : action.payload,
        isFetched: false
      };

    case GET_LIST_FAILURE:
      return {
        ...state,
        isFetched: false
      };

    default:
      return state
  }
}
