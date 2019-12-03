import React, { Component, useState } from "react";
import logo from './../login/logo.svg';
import "./InfoCar.css";
//import {Redirect} from 'react-router-dom';
import {Grid, Row, Modal, Button, Tab, Col} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';





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

            <a href="" class="modcar">Modificar</a>

           
            <Button variant="primary" onClick={Example}>
            Registrar nuevo vehículo
            </Button>

       
            
      </div>
     
    );

  }

}


//<Button href="#">Link</Button>


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

//render(<Example />);