import React, { Component } from "react";
import AddNotes from "./AddNotes";

class Board extends Component {
  render() {
    return (
      <div>
        <h1>Notes App</h1>
        <p>Add and edit your thoughts, to-do and grocery lists</p>
        <AddNotes
          notes={this.props.notes}
          addNote={this.props.addNote}
          deletenoteCard={this.props.deletenoteCard}
        />
      </div>
    );
  }
}

export default Board;
