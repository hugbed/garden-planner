import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import carrot from "./img/carrot.jpg";

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
        <div className="FilterButtonsSection">
          <button className="ButtonsGridItem">Vegetables</button>
          <button className="ButtonsGridItem">Fruits</button>
          <button className="ButtonsGridItem">Herbs</button>
          <button className="ButtonsGridItem">Plants</button>
        </div>
      </div>
    );
  }
}

class ListSection extends Component {
  constructor(props) {
    super(props);
    this.plantItem = [
      { id: 1, name: "carrot" },
      { id: 2, name: "banana" },
    ];
  }

  renderListItem(item) {
    return (
      <li>
      <div key={item.id} className="Item">
        <div className="ListItemImage">
          <img className="ListItemImage" src={carrot} alt="" />
        </div>
        <div className="content">
          <div>{item.name}</div>
        </div>
      </div>
      </li>
    );
  }


  render() {
    return (
      <div className="ListSection">
        ListSection
        <div className ="Table">
          <ul id="horizontalList">
            {this.plantItem.map(this.renderListItem)}
          </ul>
          </div>
      </div>
    );
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
