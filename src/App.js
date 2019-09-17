import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout= event => {
    this.userHasAuthenticated(false);
    this.localStorage.clear();
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      handleLogout: this.handleLogout
    };
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    );
  }
}
