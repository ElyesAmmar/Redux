import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from '../Constant/actionsTypes';

export const addTask = (description) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now(),
      description,
      isDone: false
    }
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id
    }
  };
};

export const editTask = (id, description) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      description
    }
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  };
};
