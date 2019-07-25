import {RSAA} from 'redux-api-middleware'

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export const addDelete = taskId => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `http://localhost:8080/task/delete?taskId=${taskId}`,

      method: 'DELETE',
      types: [
        'DELETE_TASK_REQUEST',
        'DELETE_TASK_SUCCESS',
        'DELETE_TASK_FAILURE'
      ]
    }
  })
};
