import React, { Component } from "react";
import logo from './logo.svg';
import "./login.css";
import axios from "axios";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: "",
      password: "",
     
    }
    this.handleingresar = this.handleingresar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  

  //handleingresar = () =>  {
    //alert("Usuario no registrado");


    handleChange(event){
      this.setState({
        [event.target.name]:event.target.value
      })
   
    }
   
    handleingresar(event) {
  
      console.log(this.state);
  
      axios.post('https://carapp-unal-2.herokuapp.com/user/log_in', 
      {
          name:this.state.email,
          email:this.state.password,
             
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
          <h1>Bienvenido a CarApp</h1>

              <form onSubmit={this.handleingresar} >
           
            <div className="email">
              <label >Email</label>
              <input
               
                placeholder="Email"
                type="email"
                name="email"
                

                value={this.state.email}
                onChange={this.handleChange}
                 
              />

             
            </div>

            <div className="password">
              <label >Password</label>
              <input
               
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                 
              />
            

            </div>
            <div className="ingresar">
              
             
              <button type="submit"  >Iniciar sesión</button>

              <a href="/Registro" class="user_reg">Registrar una cuenta nueva</a>
              
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


};