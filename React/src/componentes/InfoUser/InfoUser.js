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

            <
            div className = "formulario" >
            <
            h1 > Perfil < /h1>


            <
            div className = "email" >
            <
            label htmlFor = "email" > Nombre < /label> <
            label > "Andrea" < /label> <
            /div>

            <
            div className = "password" >
            <
            label htmlFor = "password" > Correo electrónico < /label> <
            label > "andrea@perez" < /label> <
            /div>

            <
            div className = "password" >
            <
            label htmlFor = "password" > Número de identificación < /label> <
            label > "1030758986" < /label> <
            /div>

            <
            div className = "password" >
            <
            label htmlFor = "password" > Avatar < /label> <
            img src = { "https://imagenes.diario16.com/wp-content/uploads/2017/08/Africa-Couriel.jpg" }
            width = "280"
            height = "300" / >

            <
            /div>


            <
            a href = ""
            class = "loguser" > Modificar < /a>




            <
            /div>

        );

    }

}