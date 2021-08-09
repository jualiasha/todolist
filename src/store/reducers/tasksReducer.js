export const SET_TASKS = "SET_TASKS";
export const CREATE_TASK = "CREATE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

const DEFAULT_STATE = [
  { note: "buy milk", id: Date.now() + 1, completed: false },
  { note: "sell milk", id: Date.now() + 2, completed: true },
  { note: "cook dinner", id: Date.now() + 3, completed: false },
];
export const tasksReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks;
    case CREATE_TASK:
      return [...state, action.task];
    case EDIT_TASK:
      return state.map((task) => {
        if (task.id === action.task.id) {
          return { ...task, ...action.task };
        } else {
          return task;
        }
      });
    case DELETE_TASK:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
