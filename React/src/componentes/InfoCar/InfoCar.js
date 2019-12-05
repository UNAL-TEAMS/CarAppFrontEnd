import React, { Component, useState } from "react";

import "./InfoCar.css";
//import {Redirect} from 'react-router-dom';
//import {Grid, Row, Form, Button, Tab, Col} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterCar from "../registerCar/RegisterCar";
//import ReactDOM from 'react-dom';
import { getOwnUser } from '../../services/request.service';
import {URL} from '../../constants'

export default class InfoCar extends Component {

    cars = [];

    componentDidMount() {
        getOwnUser((response) => {
            console.log('Got cars!!', response.data.cars);
            this.cars = response.data.cars;
        }, err => {});
    }



    render() {



        return ( < div className = "formulario" >
                < h1 > Automoviles < /h1> {
                this.cars.map(element =>
                    <>
    <div className="marca">
        <label htmlFor="marca"> Marca
        </label>
        <label> { element.trade_mark }
                </label>
    </div>
    <div className="referencia">
        <label htmlFor="referencia"> Referencia </label>
        <label> { element.reference } </label>
    </div>
    <div className="modelo">
        <label htmlFor="modelo"> Modelo </label>
        <label> { element.model } </label>
    </div>
    <div className="placa">
        <label htmlFor="placa"> Placa </label>
        <label> { element.license_plate } </label>
    </div>
    <div className="soat">
        <label htmlFor="soat"> Ultima fecha del soat </label>
        <label> { element.lastSoatDate } </label>
    </div>
    <div className="lastTecDate">
        <label htmlFor="lastTecDate"> Ultima fecha de la revisión tecnicomecánica </label>
        <label> { element.lastTecDate } </label>
    </div>
    <div className="last5KDate">
        <label htmlFor="last5KDate"> Ultima fecha de la revisión de 5000 kilometros </label>
        <label> { element.last5krev } </label>
    </div>
    <div className="kilometer">
        <label htmlFor="kilometer"> Kilometraje </label>
        <label> { element.currentKilometer } </label>
    </div>
    <img src={URL + ''} width="300" height="300" />
</>

                )
            } <
            /div>
        );

    }

}


//<Button href="#">Link</Button>

/*
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<Example />);*/