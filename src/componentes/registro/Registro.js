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
    this.handleingresar = this.handleingresar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
    //this.state[event.target.name] = event.target.value;
  }
  

  handleingresar(event) {

    console.log(this.state);

    axios.put('https://carapp-unal-2.herokuapp.com/user/create_user', 
    {
        name:this.state.Nombre,
        email:this.state.Correo,
        identification:this.state.Di,
        password:this.state.password    
    }
    )
    .then(response => {
      console.log(response);

    }).catch(err => {console.log(err.response);});
  
    event.preventDefault();

  }


  render() {
   
    return (
     
      
      <div className="label_login">
       
        <div className="formulario">
            <h1>Registrarse</h1>

              <form onSubmit={this.handleingresar}>


              <div className="nombre">
              <label >Nombre y apellllidos</label>
              <input type = "text"
               
                placeholder="Nombre y apellllidos"
               
                name="Nombre"
                value={this.state.Nombre}
                onChange={this.handleChange}
               

              />

             </div>

              

            <div className="email">
              <label >Emaaaail</label>
              <input type ="text"
               
                placeholder="Email"
                
                name="Correo"
              
                value={this.state.Correo}
               onChange={this.handleChange}
              />

             </div>

             <div className="ident">
              <label >Documento de identidad</label>
              <input type = "text"
               
                placeholder="Documento de identidad"
               
                name="Di"
                
                value={this.state.Di}
               onChange={this.handleChange}
              />

             </div>

            <div className="password">
              <label >Contraseña</label>
              <input type = "password"
               
                placeholder="Contraseña"
                
                name="password"
                
                value={this.state.password}
               onChange={this.handleChange}
              />
              </div>
              <div className="ingresar">
              <button type="submit"  >Registrarse</button>
              
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