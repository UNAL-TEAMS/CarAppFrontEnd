import React, { Component } from "react";
//import logo from './logo.svg';
import "./Proveedores.css";
//import {Redirect} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

export default class Proveedores extends Component {
 

  render() {
   
    return (
     
      
      
        <CardDeck>
        <Card bg="primary" text="white" className="text-center p-3">
          <Card.Img variant="top" src="https://autofarallones.com/wp-content/uploads/2018/11/SOAT.jpg" />
          <Card.Body>
         
            <Card.Title>SOAT</Card.Title>
            <Card.Text>
              Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores
              Info proveedoresInfo proveedores Info proveedores 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">a</small>
          </Card.Footer>
        </Card>
        <Card bg="secondary" text="white" className="text-center p-3">
          <Card.Img variant="top" src=" https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/142182/2fdff546ac206e9cda75635727cf5664a0c9b6b1.XL2.jpg" />
          <Card.Body>
            <Card.Title>CAMBIO DE ACEITE</Card.Title>
            <Card.Text>
            Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores
              Info proveedoresInfo proveedores Info proveedores  .{' '}
            </Card.Text>
          </Card.Body>
          s
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="dark" text="white" className="text-center p-3">
          <Card.Img variant="top" src="http://www.revisiontecnicomecanica-inteco.com/images/revision-tecnico-mecanica-experiencia-bogota.jpg" />
          <Card.Body>
            <Card.Title>REVISIÓN TECNOMECÁNICA</Card.Title>
            <Card.Text>
            Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores Info proveedores
              Info proveedoresInfo proveedores Info proveedores 
      
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
        
     
    );

  }

}