import React from "react";
import {Switch } from "react-router-dom";
import Login from "./containers/Login";
import BookingList from "./containers/BookingList"
import NotFound from "./containers/NotFound"
import CustomRoute from "./components/CustomRoute"
import Converter from "./containers/Converter";
import Main from "./containers/Main"

export default ({ childProps }) =>
  <Switch>
    <CustomRoute path="/" exact component={Main} props={childProps} />
    <CustomRoute path="/Login" exact component={Login} props={childProps} />
    <CustomRoute path="/BookingList" exact component={BookingList} props={childProps} />
    <CustomRoute path="/Utc" exact component={Converter}/>
    <CustomRoute component={NotFound} />
  </Switch>;


