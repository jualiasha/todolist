import React, { useState } from "react";
import InputField from "./InputField";
import List from "./List";
import { connect } from "react-redux";

const MainRedux = ({ tasks }) => {
  return (
    <main>
      <InputField />
      <List tasks={tasks} />
    </main>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(MainRedux);
