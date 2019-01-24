import React, { Component } from "react";
import NoteCard from "./NoteCard";

class AddNotes extends Component {
  state = {
    title: "",
    content: "",
    notes: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      notes: [
        ...this.state.notes, //have state thats already there
        {
          title: this.state.title,
          content: this.state.content
        }
      ]
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            placeholder="Add Notes"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" value="ADD" />
        </form>
        <NoteCard notes={this.state.notes} />
      </div>
    );
  }
}

export default AddNotes;
