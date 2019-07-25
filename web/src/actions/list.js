import {RSAA} from 'redux-api-middleware'

export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';

export const getList = (options = {}) => dispatch => {
  const {directoriesId = 1} = options;

  return dispatch({
    [RSAA]: {
      endpoint: `http://localhost:8080/task/list?directoriesId=${directoriesId}`,
      method: 'GET',
      types: [
        'GET_LIST_REQUEST',
        'GET_LIST_SUCCESS',
        'GET_LIST_FAILURE'
      ]
    }
  })
};
