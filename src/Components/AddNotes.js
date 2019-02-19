import React, { Component } from "react";
import NoteCard from "./NoteCard";

class AddNotes extends Component {
  state = {
    title: "",
    content: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.title, this.state.content);

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

        <NoteCard notes={this.props.notes} delete={this.props.deletenoteCard} />
      </div>
    );
  }
}

export default AddNotes;
