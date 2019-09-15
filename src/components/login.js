import React, { Component } from "react";
import logo from "../logo.svg";
import axios from "axios";
import { Icon, Button, TextField, Input, InputAdornment } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
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
        /* localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
         */alert.open({
          message: "Sesión iniciada",
          description: "Bienvenido",
          icon: <Icon type="smile" style={{ color: "#108ee9" }} />
        });
        // this.props.history.push("/bookings")

        console.log("response",response.data);
      })
      .catch(error => {});
      console.log("error",error);

  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.submitHandler}>
            <TextField
              name="email"
              type="text"
              placeholder="Enter Email"
              onChange={this.changeHandler}
              startAdornment={
                <InputAdornment position="start">
                  < AccountCircle/>
                </InputAdornment>
              }
            ></TextField>
            <br />
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.changeHandler}
            ></Input>
            <br />
            <Button variant="contained" color="primary" type="submit">
              LOGIN
            </Button>
          </form>
        </header>
      </div>
    );
  }
}
