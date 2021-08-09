import React, { useState } from "react";
import InputField from "./InputField";
import List from "./List";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({ value: "" });

  const inputValueHandler = (event) => {
    setInput({
      value: event.target.value,
    });
  };

  const addTasksHandler = (e) => {
    e.preventDefault();
    /* setTasks([...tasks, input.value]); */
    setTasks([
      ...tasks,
      { note: input.value, completed: false, id: Date.now() },
    ]);
  };
  console.log(numberoftasks);
  return (
    <main>
      <InputField input={inputValueHandler} submit={addTasksHandler} />
      <List />
    </main>
  );
};

export default Main;
