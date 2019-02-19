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

  // componentDidMount() {
  //   const notes = localStorage.getItem("notes");
  //   this.setState({ notes });
  //   console.log(notes);
  // }

  addNote = (title, content) => {
    let newNotes = [
      ...this.state.notes, //have state thats already there
      {
        id: uuid.v4(),
        title: title,
        content: content
      }
    ];
    this.setState({
      notes: newNotes
    });

    // localStorage.setItem("notes", newNotes);
  };

  editNote = (title, content) => {
    const updatedNotes = {
      title: title,
      content: content
    };
    this.setState({
      notes: [...this.state.notes, updatedNotes]
    });
  };

  deletenoteCard = id => {
    var filteredItems = this.state.notes.filter(function(note) {
      return note.id !== id;
    });

    this.setState({
      notes: filteredItems
    });
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
