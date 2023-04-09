import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from '../Constant/actionsTypes';

const initialState = {
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              isDone: !task.isDone
            };
          } else {
            return task;
          }
        })
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              description: action.payload.description
            };
          } else {
            return task;
          }
        })
      };
    default:
      return state;
  }
};

export default tasksReducer;
