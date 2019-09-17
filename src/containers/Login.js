import React, { Component } from "react";
import logo from "../logo.svg";
import axios from "axios";
import { Button, Input, InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: true
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .put(
        "https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl",
        {
          email: this.state.email
        },
        {
          headers: {
            app: "APP_BCK",
            password: this.state.password
          }
        }
      )
      .then(response => {
        alert("Sesión iniciada")
        this.props.userHasAuthenticated(true);
        localStorage.setItem("token", response.data.sessionTokenBck);
        localStorage.setItem("email", response.data.email);
        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        alert("Datos Errados" + error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/BookingList" props= {this.props} />
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <form onSubmit={this.submitHandler}>
              <Input
                name="email"
                type="text"
                color="primary"
                placeholder="Enter Email"
                onChange={this.changeHandler}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              ></Input>
              <br />
              <Input
                name="password"
                type="password"
                color="primary"
                placeholder="Enter Password"
                onChange={this.changeHandler}
              ></Input>
              <br />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!this.validateForm()}
              >
                LOGIN
              </Button>
            </form>
          </header>
        </div>
      );
    }
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};
