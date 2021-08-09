import React from "react";
import { connect } from "react-redux";

const Header = () => {
  return (
    <header>
      <h1>Notes to myself</h1>
      <p>I have currently {} notes</p>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(Header);
