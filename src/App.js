import React, { Component } from "react";
import logo from './logo2.svg';
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: null,
      password: null,
      formErrors: {
        
        email: "",
        password: ""
      }
    };
  }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Dirección email inválida";
        break;
      case "password":
        formErrors.password =
          value.length < 7 ? "minimo 7 carácteres" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  };

  render() {
    const { formErrors } = this.state;
    return (
      
      <div className="label_login">

        <div className="formulario">
            <h1>CarApp</h1>

              <form onSubmit={this.handleSubmit} noValidate>
           
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}

              />

              {formErrors.email.length > 0 && (
                <span className="mensaje_error">{formErrors.email}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="mensaje_error">{formErrors.password}</span>
              )}

            </div>
            <div className="ingresar">
              <button type="submit">Iniciar sesión</button>
              
              <a href="" class="NewAcount">Registrar una cuenta nueva</a>
              
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