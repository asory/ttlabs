import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import BookingList from "./containers/BookingList"
import NotFound from "./containers/NotFound"
import CustomRoute from "./components/CustomRoute"

export default ({ childProps }) =>
  <Switch>
    <CustomRoute path="/" exact component={Login} props={childProps} />
    <CustomRoute path="/BookingList" exact component={BookingList} props={childProps} />
    <CustomRoute component={NotFound} />
  </Switch>;


