import React, { Component } from "react";
//import logo from './logo.svg';
import "./InfoUser.css";
//import {Redirect} from 'react-router-dom';


export default class InfoUser extends Component {
  constructor(props) {
    super(props);

  }

  render() {
   
    return (
     
      
      
       
        <div className="formulario">
          <h1>Perfil</h1>

           
            <div className="email">
              <label htmlFor="email">Nombre</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Correo electrónico</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Número de identificación</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Avatar</label>
            
            </div>


            <a href="" class="loguser">Modificar</a>

        
     
             
      </div>
     
    );

  }

}
