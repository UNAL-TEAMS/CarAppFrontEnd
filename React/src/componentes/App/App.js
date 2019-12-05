import React, { Component } from "react";
/*import {Registro} from './../Registro/Registro';

import {HashRouter, Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';*/
import {HashRouter, Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';
import Login from './../login/Login';
import Registro from './../registro/Registro';
import RegisterCar from './../registerCar/RegisterCar';
import HomeUser from './../HomeUser/HomeUser';



class App extends Component {

state= {
  litlePanel:[]
}

  render() {
    return (
    

    <BrowserRouter>
    <div>
    
        <Switch>
          <Route exact path='/' render= {()=>(
            <Login litlePanel= {this.state.litlePanel[1]} 
            />
            )} />
          <Route exact path='/Registro' render= {()=>(
            <Registro litlePanel= {this.state.litlePanel[2]} 
            />
            )} />

          <Route exact path='/HomeUser' render= {()=>(
            <HomeUser litlePanel= {this.state.litlePanel[3]} 
            />
            )} />

            <Route exact path='/RegisterCar' render= {()=>(
            <RegisterCar litlePanel= {this.state.litlePanel[4]} 
            />
            )} />

          </Switch>

        
          </div>
      </BrowserRouter>
    );
  }
}
export default App;

