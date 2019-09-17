import React, { Component } from "react";
import logo from "../logo.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Link to="/Utc">
            <Button>TO UTC Converter</Button>
          </Link>

          <Link to="/Login">
            <Button>To TUTEN LOGIN </Button>
          </Link>
        </div>
      </div>
    );
  }
}
