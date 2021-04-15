import React, { Component } from "react";

import carrot from "./img/carrot.jpg";

import "./Sidebar.css";

class TitleSection extends Component {
  render() {
    return (
      <div className="title-section">
        <h3 className="title">Title Section</h3>
      </div>
    );
  }
}

class ToolsSection extends Component {
  render() {
    return (
      <div className="tools-section">
        <h3 className="title">Tools Section</h3>
      </div>
    );
  }
}

class FilterSection extends Component {
  render() {
    return (
      <div className="filter-section">
        <h3 className="title">FilterSection</h3>
        <div className="category-list">
          <button className="category-list-item">Vegetables</button>
          <button className="category-list-item">Fruits</button>
          <button className="category-list-item">Herbs</button>
          <button className="category-list-item">Plants</button>
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
      { id: 3, name: "banana" },
      { id: 4, name: "banana" },
      { id: 5, name: "banana" },
    ];
    this.selectedItem = null;
    this.handleClick = this.handleClick.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  handleClick() {
    console.log("click");
  }

  renderListItem(item) {
    return (
      <li key={item.id} className="list-item" onClick={this.handleClick}>
        <img src={carrot} alt="" />
        <span>{item.name}</span>
      </li>
    );
  }

  render() {
    return (
      <div className="list-section">
        <h3 className="title">List Section</h3>
        <ul className="list">{this.plantItem.map(this.renderListItem)}</ul>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <TitleSection />
        <ToolsSection />
        <FilterSection />
        <ListSection />
      </div>
    );
  }
}

export default Sidebar;
