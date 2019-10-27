import React, { Component } from "react";
import "./Registro.css";
/*
import {HashRouter, Router, Switch, BrowserRouter} from 'react-router-dom';
import {Link} from "react-router-dom";*/

export default class Registro extends Component {
      
  constructor(props) {
    super(props);

    this.state = {
      
      Nombre: null,
      Correo: null,
      Di: null,
      password: null,
    };
  }


  

  handleingresar = () =>  {
    alert("Usuario registrado");
  }


  render() {
   
    return (
     
      
      <div className="label_login">
       
        <div className="formulario">
            <h1>Registrarse</h1>

              <form onSubmit={this.handleSubmit} noValidate>


              <div className="nombre">
              <label >Nombre y apellidos</label>
              <input
               
                placeholder="Nombre y apellidos"
                type="nombre"
                name="nombre"
                noValidate
               

              />

             </div>

              

            <div className="email">
              <label >Email</label>
              <input
               
                placeholder="Email"
                type="email"
                name="email"
                noValidate
               
              />

             </div>

             <div className="ident">
              <label >Documento de identidad</label>
              <input
               
                placeholder="Documento de identidad"
                type="ident"
                name="ident"
                noValidate
               
              />

             </div>

            <div className="password">
              <label >Contraseña</label>
              <input
               
                placeholder="Contraseña"
                type="password"
                name="password"
                noValidate
               
              />
              </div>
          
            
            <div className="ingresar">
              <button type="submit"onClick={this.handleingresar}>Registrarse</button>
              
            </div>
        
          </form>
       
        </div>
      
             
      </div>
     
    );

  }

}




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


    
}