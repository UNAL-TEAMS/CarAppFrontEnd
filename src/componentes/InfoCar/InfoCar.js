import React, { Component, useState } from "react";

import "./InfoCar.css";
//import {Redirect} from 'react-router-dom';
//import {Grid, Row, Form, Button, Tab, Col} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterCar from "../registerCar/RegisterCar";
//import ReactDOM from 'react-dom';



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
              <label>"FORD"</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Referencia</label>
              <label>"FOCUS"</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Modelo</label>
              <label>"2016"</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Placa</label>
              <label>"CYU 879"</label>
            
            </div>

            <div className="password">
              <label htmlFor="password">Foto</label>
              <img src={"https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_631,y_0,w_809,h_809/w_256,h_256,c_fill/auto-client/f90ce7f6bae2445cbe2ab1dee4e27ffd/ford_focus_eu_3_foc_m_l_42280_16x9_2160x1215.jpg.renditions.extra_large.jpeg"} width="300" height="300" />
            </div>

            <div className="password">
              <label htmlFor="kil">Kilometraje</label>
              <label>"58005"</label>
            
            </div>

            <a href="" class="modcar">Modificar</a>

            <a href="/RegisterCar" class="modcar" >Registrar vehiculo</a>
          

      </div>
     
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