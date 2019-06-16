import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class NoteCard extends Component {
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const { notes } = this.props;
    
    return (
      <div className="NoteCard">
        {/*make draggable*/}
        {notes ? (notes.map(note => (
          <div className="card" key={note.id}>
            <h1 className="cardTitle">{note.title}</h1>{" "}
            <div className="card-body">
              <p>{note.content}</p>
              <span id="delete" onClick={() => this.delete(note.id)}>
                <i className="far fa-trash-alt" />
              </span>{" "}
              <Link to={`/edit/${note.id}`}>
                <i id="edit" className="far fa-edit" />
              </Link>
            </div>
          </div>
        ))
        ): null
      }
      </div>
    );
  }
}

export default NoteCard;
