import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";

export default class TimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      timezone: "",
      isDateTimePickerVisible: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDateChange = time => {
    this.setState({ time: time });
  };
  validateForm() {
    return this.state.timezone.length > 0;
  }

  submitHandler = e => {
    console.log("RESULTS HERE:", this.state.time);

    console.log("RESULTS HERasdasE:", format(this.state.time, "HH:mm"));

    axios
      .post(
        "https://frozen-crag-41915.herokuapp.com/utc",
        { time: this.state.time, timezone: this.state.timezone },

        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )

      .then(responseData => {
        console.log("RESULTS HERE:", responseData);
        alert(
          "IN TIMEZONE:" +
            responseData.timezone +
            "/n The Time is :" +
            responseData.time
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              name="time"
              margin="normal"
              value={this.time}
              format="HH:mm"
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
            <div>
              <Input
                name="timezone"
                placeholder="set Timezone"
                type="numeric"
                onChange={this.changeHandler}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!this.validateForm()}
              > GET UTC HOUR
              </Button>
            </div>
          </MuiPickersUtilsProvider>
        </form>
        <div>
          <Link to="/">
            <Button variant="contained" color="primary">
              SALIR
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
