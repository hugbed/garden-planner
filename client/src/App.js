import React, { Component } from "react";
import Sidebar from "./Sidebar";
import GardenView from "./GardenView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <GardenView />
      </div>
    );
  }
}

export default App;
