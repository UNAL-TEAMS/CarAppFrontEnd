import React, { Component } from "react";
import "./Registro.css";
import axios from "axios";

import ReactDOM from 'react-dom';
import Login from './../login/Login';
import { register } from '../../services/request.service';

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
        };
        this.handleingresar = this.handleingresar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleingresar(event) {

        register(this.state.Correo, this.state.Nombre, this.state.password, this.state.Di, (response) => {
            alert("Registro exitoso");
            ReactDOM.render( < Login / > , document.getElementById('root'));
        }, (err) => {
            console.log(err.response);
            alert("Ingrese todos los datos");
        });
        event.preventDefault();
    }

    render() {

        return (


            <
            div className = "label_login" >

            <
            div className = "formulario" >
            <
            h1 > Registrarse < /h1>

            <
            form onSubmit = { this.handleingresar } >


            <
            div className = "nombre" >
            <
            label > Nombre y apellidos < /label> <
            input type = "text"

            placeholder = "Nombre y apellllidos"

            name = "Nombre"
            value = { this.state.Nombre }
            onChange = { this.handleChange }


            />

            <
            /div>



            <
            div className = "email" >
            <
            label > Emaaaail < /label> <
            input type = "text"

            placeholder = "Email"

            name = "Correo"

            value = { this.state.Correo }
            onChange = { this.handleChange }
            />

            <
            /div>

            <
            div className = "ident" >
            <
            label > Documento de identidad < /label> <
            input type = "text"

            placeholder = "Documento de identidad"

            name = "Di"

            value = { this.state.Di }
            onChange = { this.handleChange }
            />

            <
            /div>

            <
            div className = "password" >
            <
            label > Contraseña < /label> <
            input type = "password"

            placeholder = "Contraseña"

            name = "password"

            value = { this.state.password }
            onChange = { this.handleChange }
            /> < /
            div > <
            div className = "ingresar" >
            <
            button href = "/"
            type = "submit" > Registrarse < /button>

            <
            /div>


            <
            /form>



            <
            /div>


            <
            /div>

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