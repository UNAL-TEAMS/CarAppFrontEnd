import React, { Component } from "react";
import logo from './../login/logo.svg';
import "./InfoCar.css";
//import {Redirect} from 'react-router-dom';


export default class InfoCar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
   
    return (
     
      
      
       
        <div className="formulario">
          <h1>Automovil</h1>

           
            <div className="email">
              <label htmlFor="email">Marca</label>
              <label>""</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Referencia</label>
              <label>""</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Modelo</label>
              <label>""</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Placa</label>
              <label>""</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Foto</label>
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="password">
              <label htmlFor="kil">Kilometraje</label>
              <label>""</label>
            
            </div>

            <a href="" class="user_reg">Modificar</a>
           



        
     
             
      </div>
     
    );

  }

}
