import {
  SET_TASKS,
  EDIT_TASK,
  CREATE_TASK,
  DELETE_TASK,
} from "../reducers/tasksReducer";
export function setTasks(tasks) {
  return (dispatch) => {
    dispatch({
      type: SET_TASKS,
      tasks,
    });
  };
}

export function editTask(task) {
  return (dispatch) => {
    dispatch({
      type: EDIT_TASK,
      task,
    });
  };
}

export function createTask(task) {
  return (dispatch) => {
    dispatch({
      type: CREATE_TASK,
      task,
    });
  };
}

export function deleteTask(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_TASK,
      id,
    });
  };
}
