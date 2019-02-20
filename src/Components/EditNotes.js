import React, { Component } from "react";
import "../App.css";

class EditNotes extends Component {
  state = {
    title: "",
    content: ""
  };

  handleSubmit = e => {
    const { id } = this.props.notes;
    e.preventDefault();

    // const note = this.props.notes.filter(
    //   ({ id }) => id === this.props.match.params.id
    // )[0];

    this.props.editNote(id, this.state.title, this.state.content);

    this.props.history.push("/"); //redirect to homepage
  };

  componentDidMount() {
    const note = this.props.notes.filter(
      ({ id }) => id === this.props.match.params.id
    )[0];

    this.setState({ title: note.title, content: note.content });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="EditForm">
        <h1>Editing Notes</h1>

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

          <input type="submit" value="EDIT" />
        </form>
      </div>
    );
  }
}

export default EditNotes;
