import { combineReducers } from 'redux';
import tasksReducer from '../Reducers/TasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer
  });
  
export default rootReducer;