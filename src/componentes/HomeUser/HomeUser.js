import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
//import Navbar from 'react-bootstrap/Navbar'
import "./HomeUser.css";
/*
import {HashRouter, Router, Switch, BrowserRouter} from 'react-router-dom';
import {Link} from "react-router-dom";*/

export default class HomeUser extends Component {
  /*    
  constructor(props) {
    super(props);

  }
*/

  

  handleingresar = () =>  {
    alert("función en construcción");
  }


  render() {
   
    return (
        
       

      <div className="label_home">



       
        <div className="barra">
            
              <form onSubmit={this.handleSubmit} noValidate>


              <div className="regauto">
              <button type="submit"onClick={this.handleingresar}>Registrar automovil</button>
              </div>

              

            <div className="miauto">
            <button type="submit"onClick={this.handleingresar}>Mis automóviles</button>
             </div>

             <div className="estadisticas">
             <button type="submit"onClick={this.handleingresar}>Estadísticas</button>
             
             </div>

            <div className="alertas">
            <button type="submit"onClick={this.handleingresar}>Alertas</button>
              </div>
          
              <div className="proveedores">
            <button type="submit"onClick={this.handleingresar}><p class="centrado">Proveedores</p></button>
              </div>
            
           
              
            
        
          </form>
       
        </div>
      
             
      </div>
     
    );

  }

}

