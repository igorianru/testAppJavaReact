import { combineReducers } from 'redux'
import lists from './lists'
import task from './task'
import {reducers as taskModalReducer} from '../ui/CreateTask';
import taskReducer from '../ui/CreateTask/reducers-task';

export default combineReducers({
  lists,
  editTaskModal: taskModalReducer,
  task         : taskReducer,
  createTask   : task,
})
