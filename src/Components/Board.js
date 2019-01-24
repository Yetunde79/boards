import React, { Component } from "react";
import NoteCard from "./NoteCard";
import AddNotes from "./AddNotes";

class Board extends Component {
  render() {
    return (
      <div>
        <p>Add and Edit your thoughts, To-do lists and grocery lists</p>
        <AddNotes />
        <NoteCard /> {/*Map through this*/}
      </div>
    );
  }
}

export default Board;
