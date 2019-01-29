import React, { Component } from "react";

class NoteCard extends Component {
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="NoteCard">
        {/*make draggable*/}
        {notes.map(note => (
          <div className="card" key={note.id}>
            <h1 className="cardTitle">{note.title}</h1>{" "}
            {/*Limit num of characters allowed for title*/}
            <p>{note.content}</p>
            <span id="delete" onClick={() => this.delete(note.id)}>
              <i class="far fa-trash-alt" />
            </span>{" "}
          </div>
        ))}
      </div>
    );
  }
}

export default NoteCard;
