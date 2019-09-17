import React, { Component } from "react";
import logo from "../logo.svg";
import TimeForm from "../components/TimeForm";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <TimeForm />
        </header>
      </div>
    );
  }
}