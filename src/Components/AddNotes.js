import React, { Component } from "react";
import NoteCard from "./NoteCard";
import uuid from "uuid";

class AddNotes extends Component {
  state = {
    title: "",
    content: "",
    notes: []
  };

  deletenoteCard = id => {
    var filteredItems = this.state.notes.filter(function(note) {
      return note.id !== id;
    });

    this.setState({
      notes: filteredItems
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      notes: [
        ...this.state.notes, //have state thats already there
        {
          id: uuid.v4(),
          title: this.state.title,
          content: this.state.content
        }
      ]
    });

    //clear the inputs after submitting
    this.setState({
      title: "",
      content: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="AddForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Add Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <textarea
              rows="10"
              type="text"
              placeholder="Add Note"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="ADD" />
        </form>
        <NoteCard notes={this.state.notes} delete={this.deletenoteCard} />
      </div>
    );
  }
}

export default AddNotes;
