
import React, { Component } from "react";
import "./registerCar.css";
import axios from "axios";

import ReactDOM from 'react-dom';
import HomeUser from "../HomeUser/HomeUser";
//import Login from './../login/Login';

/*
import {HashRouter, Router, Switch, BrowserRouter} from 'react-router-dom';
import {Link} from "react-router-dom";*/

export default class RegisterCar extends Component {
      
  constructor(props) {
    super(props);

    this.state = {
      
      Marca: "",
      Modelo: "",
      Referencia: "",
      FechaSoat: null,
      FechaTM: null,
      Placa: "",
    }
    this.handleingresar = this.handleingresar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
    
  }
  

  handleingresar(event) {

    console.log(this.state);

    axios.post('https://carapp-unal-2.herokuapp.com/user/add_car', 
    {
        
        trade_mark:this.state.Marca,
        model:this.state.Modelo,
        reference:this.state.Referencia,
        lastSoatDate:this.state.FechaSoat,
        lastTecDate:this.state.FechaSoat,
        license_plate:this.state.Placa    
    }
    )
    .then(response => {
      console.log(response);

      if(response.status = 201){
        alert("Registro exitoso");
        ReactDOM.render(< HomeUser />, document.getElementById('root'));
        }



    }).catch(err => {alert("Ingrese todos los datos")});
  
    event.preventDefault();

    


    }


  render() {
   
    return (
     
      
      <div className="label_login">
       
        <div className="formulario">
            <h1>Registrar automovil</h1>

              <form onSubmit={this.handleingresar}>


              <div className="marca">
              <label >Marca del vehículo</label>
              <input type = "text"
               
                placeholder="Marca del vehículo"
               
                name="Marca"
                value={this.state.Marca}
                onChange={this.handleChange}
               

              />

             </div>

              

            <div className="modelo">
              <label >Modelo</label>
              <input type ="text"
               
                placeholder="Modelo"
                
                name="Modelo"
              
                value={this.state.Modelo}
               onChange={this.handleChange}
              />

             </div>

             <div className="referencia">
              <label >Referencia del vehículo </label>
              <input type = "text"
               
                placeholder="Referencia (ej: focus, spark, captiva)"
               
                name="Referencia"
                
                value={this.state.Referencia}
               onChange={this.handleChange}
              />

             </div>

            <div className="fechasoat">
              <label >Fecha de compra del Soat</label>
              <input type = "date"
               
                placeholder="Fecha soat"
                
                name="FechaSoat"
                
                value={this.state.FechaSoat}
               onChange={this.handleChange}
              />
              </div>

              <div className="fechatm">
              <label >Fecha de la última revisión tecnomecánica</label>
              <input type = "date"
               
                placeholder="Fecha revisión tecnomecánica"
                
                name="FechaTM"
                
                value={this.state.FechaTM}
               onChange={this.handleChange}
              />
              </div>

              <div className="placa">
              <label >Placa del vehículo</label>
              <input type = "text"
               
                placeholder="Placa"
                
                name="Placa"
                
                value={this.state.Placa}
               onChange={this.handleChange}
              />
              </div>

              <div className="ingresar">
              <button href="/" type="submit" >Registrarse</button>
              
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