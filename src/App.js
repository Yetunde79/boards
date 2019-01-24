import React, { Component } from "react";
import Board from "./Components/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Notes App</h1>
        <Board />
      </div>
    );
  }
}

export default App;
