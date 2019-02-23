import React, { Component } from "react";
import NoteCard from "./NoteCard";

class AddNotes extends Component {
  state = {
    title: "",
    content: "",
    error: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.title, this.state.content);

    //clear the inputs after submitting
    this.setState({
      title: "",
      content: "",
      error: false
    });
  };

  limitText = title => {
    let maxlength = title.maxLength;

    if (title.value.length >= maxlength && title.name === "title") {
      this.setState({ error: true });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.limitText(e.target);
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
              maxLength="30"
            />
          </div>

          <small id="error">
            {this.state.error ? "Max characters reached" : null}
          </small>

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
