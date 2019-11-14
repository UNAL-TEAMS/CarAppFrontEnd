import React, { Component } from "react";
import "./Registro.css";
import axios from "axios";
/*
import {HashRouter, Router, Switch, BrowserRouter} from 'react-router-dom';
import {Link} from "react-router-dom";*/

export default class Registro extends Component {
      
  constructor(props) {
    super(props);

    this.state = {
      
      Nombre: "",
      Correo: "",
      Di: "",
      password: "",
    }
    this.handleingresar = this.handleSubmit.bind(this);

  }


  

  handleingresar = () =>  {

    const{
      Nombre,
      Correo,
      Di,
      password,

    }=this.state;

    axios.post("https://carapp-unal-2.herokuapp.com/user/create_user", 
    {
      user: {
        name=Nombre,
        email=Correo,
        identification=Di,
        password=password 
      }
    }
    )
    .then(response=> {
      console.log("Registradooo",response);
      window.location.href='/Login';

    })
    var xhr = XMLHttpRequest();
    xhr.addEventListener("readyStateChange", funtion =>{
      console.log(this);
      alert("Usuario registrado");
    });
/*
    var info = {};
    info.name = this.state.Nombre;
    info.email = this.state.Correo;
    info.identification = this.state.Di;
    info.password = this.state.password;

    xhr.open("PUT","https://carapp-unal-2.herokuapp.com/user/create_user");
    xhr.setRequestHeader("content-type","application/json;charset=UTF-8");
    xhr.send(JSON.stringify(info));
*/
  }


  render() {
   
    return (
     
      
      <div className="label_login">
       
        <div className="formulario">
            <h1>Registrarse</h1>

              <form onSubmit={this.handleSubmit} noValidate>


              <div className="nombre">
              <label >Nombre y apellidos</label>
              <input type = "text"
               
                placeholder="Nombre y apellidos"
                type="nombre"
                name="nombre"
                value={this.state.Nombre}
               

              />

             </div>

              

            <div className="email">
              <label >Email</label>
              <input
               
                placeholder="Email"
                type="email"
                name="email"
              
                value={this.state.Correo}
               
              />

             </div>

             <div className="ident">
              <label >Documento de identidad</label>
              <input
               
                placeholder="Documento de identidad"
                type="ident"
                name="ident"
                
                value={this.state.Di}
               
              />

             </div>

            <div className="password">
              <label >Contraseña</label>
              <input
               
                placeholder="Contraseña"
                type="password"
                name="password"
                
                value={this.state.password}
               
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