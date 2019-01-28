import React, { Component } from "react";

class NoteCard extends Component {
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="NoteCard">
        {notes.map(note => (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => this.delete(note.id)}>X</button>{" "}
            {/*didnt work without arrow func, why?*/}
          </div>
        ))}
      </div>
    );
  }
}

export default NoteCard;
