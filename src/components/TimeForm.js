import React, { Component } from "react";
import Axios from "axios";
import { Button, Input } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import 'date-fns';

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


  submitHandler = () => {
    Axios.post(
      "https://frozen-crag-41915.herokuapp.com/utc",
      { time: this.time, timezone: this.state.timezone },

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )

      .then(response => response.json())
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
    const { time, timezone } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Input
              name={timezone}
              placeholder="Timezone"
              placeholderColor="1e90ff"
              style={styles.input}
              type="numeric"
              ref={input => (this.timezone = input)}
            />

            <KeyboardTimePicker
              name={time}
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={time}
              onChange={this.changeHandler}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </MuiPickersUtilsProvider>

          <Button style={styles.button} type="submit">
            <h1 style={styles.buttonText}>TO UTC</h1>
          </Button>
        </form>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 60,
    alignSelf: "stretch",
    fontSize: 20,
    borderBottomWidth: 2
  },

  button: {
    height: 60,
    width: 200,
    borderRadius: 40,
    borderWidth: 5,
    alignContent: "center"
  },
  buttonText: {
    alignSelf: "center"
  }
});
