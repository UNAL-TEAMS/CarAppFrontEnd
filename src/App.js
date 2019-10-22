import React, { Component } from "react";
import logo from './logo2.svg';
import "./App.css";
import Registro from './Registro';
import {HashRouter, Route, Switch, BrowserRouter} from 'react-router-dom';
import {Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: null,
      password: null,
     
    };
  }


  

  handleingresar = () =>  {
    alert("Usuario no registrado");
  }


  render() {
   
    return (
     
      
      <div className="label_login">
       
        <div className="formulario">
            <h1>CarApp</h1>

              <form onSubmit={this.handleSubmit} noValidate>
           
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
               
                placeholder="Email"
                type="email"
                name="email"
                noValidate
               

              />

             
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
               
                placeholder="Password"
                type="password"
                name="password"
                noValidate
               
              />
            

            </div>
            <div className="ingresar">
              <button type="submit"onClick={this.handleingresar}>Iniciar sesión</button>
                         
              <a href="/Registro" class="NewAcount">Registrar una cuenta nueva</a>
            </div>
        
          </form>
       
        </div>
        <p></p>
              <img src={logo} className="App-logo" alt="logo" />
              <p> Página en desarrollo del proyecto Car App</p>
              <a href="https://carappunal2019-2.000webhostapp.com/" class="button">Ver proyecto</a>
              
              <p></p>
             
      </div>
     
    );

  }

}


export default App;

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);



const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });


  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;

};

/*

function Registro_o() {
  
     
  return (
 
    <div>

      <p></p>
            
            <img src={logo} className="App-logo" alt="logo" />
            <p> Página en desarrollo del proooooooyecto Car App</p>
            <a href="https://carappunal2019-2.000webhostapp.com/" class="button">Ver proyecto</a>
            
            <p></p>

    </div>
  
  );

}
*/