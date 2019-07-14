import React, { Component } from "react";
import Board from "./Components/Board";
import EditNotes from "./Components/EditNotes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import uuid from "uuid";

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    let notes = [];
    try {
      notes = JSON.parse(localStorage.getItem("notes"));
    } catch (e) {
      console.error(e);
    }
    this.setState({ notes });
  }

  addNote = (title, content) => {
    let newNotes = {
      id: uuid.v4(),
      title: title,
      content: content
    };

    this.setState({
      notes: [newNotes, ...this.state.notes] //have state thats already there
    });
    localStorage.setItem(
      "notes",
      JSON.stringify([newNotes, ...this.state.notes])
    );
  };

  editNote = (id, title, content) => {
    const updatedNotes = {
      id: id,
      title: title,
      content: content
    };

    let { notes } = this.state;
    let editedNotes = [];

    notes.forEach(note => {
      if (note.id === id) {
        note = updatedNotes;
      }
      editedNotes.push(note);
    });

    this.setState({
      notes: editedNotes
    });

    localStorage.setItem("notes", JSON.stringify(editedNotes));
  };

  deletenoteCard = id => {
    var filteredItems = this.state.notes.filter(function(note) {
      return note.id !== id;
    });

    this.setState({
      notes: filteredItems
    });

    localStorage.setItem("notes", JSON.stringify(filteredItems));
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Board
                  {...props}
                  notes={this.state.notes}
                  addNote={this.addNote}
                  deletenoteCard={this.deletenoteCard}
                />
              )}
            />
            <Route
              path="/edit/:id"
              render={props => (
                <EditNotes
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
