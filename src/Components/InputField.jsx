import React, { useState } from "react";
import { createTask } from "../store/actions/tasksActions";
import { connect } from "react-redux";

const InputField = ({ createTask }) => {
  const [taskForm, setTaskForm] = useState({
    note: "",
    id: Date.now(),
    completed: false,
  });

  const inputValueHandler = (event) => {
    setTaskForm({
      ...taskForm,
      [event.target.name]: event.target.value,
      ["id"]: Date.now(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(taskForm);
    console.log(taskForm);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="note"
          name="note"
          required
          minLength={4}
          maxLength={500}
          size={20}
          onChange={inputValueHandler}
        />
        <button type="submit">Add note</button>
      </form>
    </>
  );
};
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
export default connect(mapStateToProps, { createTask })(InputField);
