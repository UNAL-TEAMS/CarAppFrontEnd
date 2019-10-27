import React, { Component } from "react";
/*import {Registro} from './../Registro/Registro';
import {Login} from './../login/Login';
import {HashRouter, Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';*/
import {HashRouter, Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    
    <BrowserRouter>
    <div>
    
        <Switch>
          <Route path='/login' Component= {Login} />
          <Route path='/Registro' Component={Registro} />
          </Switch>

        
          </div>
      </BrowserRouter>
    );
  }
}
export default App;

