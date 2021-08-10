import React from "react";
import { connect } from "react-redux";

const Header = ({ tasks }) => {
  return (
    <header>
      <h1>Notes to myself</h1>
      <p>
        I have currently <span>{tasks.length}</span> notes
      </p>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(Header);
