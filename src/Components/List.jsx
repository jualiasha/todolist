import React from "react";
import { connect } from "react-redux";
import { editTask, deleteTask } from "../store/actions/tasksActions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const List = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li
            className={`${task.completed ? "completed" : ""}`}
            key={task.id}
            onClick={() => editTask({ ...task, completed: !task.completed })}
          >
            {task.note}

            <button onClick={() => deleteTask(task.id)} type="button">
              <DeleteForeverIcon />
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
