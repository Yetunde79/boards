import React, { Component } from "react";

class AddNotes extends Component {
  state = {
    notes: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>Add Notes</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add Title" ref="title" />
          <textarea placeholder="Add Notes" ref="Notes" />
          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default AddNotes;
