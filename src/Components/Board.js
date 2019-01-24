import React, { Component } from "react";
import AddNotes from "./AddNotes";

class Board extends Component {
  render() {
    return (
      <div>
        <p>Add and edit your thoughts, to-do and grocery lists</p>
        <AddNotes />
      </div>
    );
  }
}

export default Board;
