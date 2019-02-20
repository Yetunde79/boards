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

    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  editNote = (title, content) => {
    const updatedNotes = {
      title: title,
      content: content
    };
    this.setState({
      notes: [...this.state.notes, updatedNotes]
    });

    //localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
