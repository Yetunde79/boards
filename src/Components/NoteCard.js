import React, { Component } from "react";

class NoteCard extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        {notes.map(note => (
          <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default NoteCard;
