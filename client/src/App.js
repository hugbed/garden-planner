import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class TitleSection extends Component {
  render() {
    return <div className="TitleSection">TitleSection</div>;
  }
}

class ToolsSection extends Component {
  render() {
    return <div className="ToolsSection">ToolsSection</div>;
  }
}

class FilterSection extends Component {
  render() {
    return (
      <div className="FilterSection">
        FilterSection
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>D</button>
      </div>
    );
  }
}

class ListSection extends Component {
  render() {
    return <div className="ListSection">ListSection</div>;
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <TitleSection />
        <ToolsSection />
        <FilterSection />
        <ListSection />
      </div>
    );
  }
}

class GardenView extends Component {
  render() {
    return <div className="GardenView">GARDEN</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Sidebar />
        <GardenView />
      </div>
    );
  }
}

export default App;
