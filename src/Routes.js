import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import BookingList from "./containers/BookingList"
import NotFound from "./containers/NotFound"

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Login} props={childProps} />
    <Route path="/BookingList" exact component={BookingList} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;


