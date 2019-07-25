import {RSAA} from 'redux-api-middleware'

export const POST_TASK_REQUEST = 'POST_TASK_REQUEST';
export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
export const POST_TASK_FAILURE = 'POST_TASK_FAILURE';

export const addTask = (options = {}) => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: options.taskId
        ? `http://localhost:8080/task/update?taskId=${options.taskId || null}`
        : `http://localhost:8080/task/add`,

      method: 'POST',
      body : JSON.stringify(options),
      types: [
        'POST_TASK_REQUEST',
        'POST_TASK_SUCCESS',
        'POST_TASK_FAILURE'
      ]
    }
  })
};
