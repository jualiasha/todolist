import React from "react";
import { connect } from "react-redux";
import { editTask, deleteTask } from "../store/actions/tasksActions";

const List = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li
            style={{ textDecoration: task.completed ? "overline" : "" }}
            key={task.id}
            onClick={() =>
              editTask({ ...task, ["completed"]: !task.completed })
            }
          >
            {task.note}
            <button onClick={() => deleteTask(task.id)} type="button">
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps, { editTask, deleteTask })(List);
