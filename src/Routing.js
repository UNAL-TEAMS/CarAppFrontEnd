import React, { Component } from "react";
import logo from './logo2.svg';
import "./App.css";
import Registro from "./Registro";
import App from "./App"
import {HashRouter, Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';
import {Link} from "react-router-dom";

export default class Rounting extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' Component= {App} />
          <Route path='/Registro' Component={Registro} />
          </Switch>
      </BrowserRouter>
    );
  }
}