import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomeUser.css";
import InfoUser from './../InfoUser/InfoUser';
import InfoCar from './../InfoCar/InfoCar';

import {Grid, Row, ListGroup, Button, Tab, Col} from 'react-bootstrap'; 

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

        

<Tab.Container id="list-group-tabs-example" defaultActiveKey="#Perfil">
  <ul class ="list-group">
  <Row>
    <Col sm={4}>
           <ListGroup>
        <ListGroup.Item action href="#Perfil">
          Mi perfil
        </ListGroup.Item>
        <ListGroup.Item action href="#Carros" variant="dark">
          Mi(s) carro(s)
        </ListGroup.Item>
        <ListGroup.Item action href="#Alertas" variant="warning">
          Alertas
        </ListGroup.Item>
        <ListGroup.Item action href="#Proveedores" variant="danger">
          Proveedores
        </ListGroup.Item>
        
      </ListGroup>
     
    </Col>

    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#Perfil">
          <InfoUser/>
        </Tab.Pane>
        <Tab.Pane eventKey="#Carros">
          <InfoCar/>
        </Tab.Pane>
        <Tab.Pane eventKey="#Alertas">
          <div>uuuuuuu</div>
        </Tab.Pane>
        <Tab.Pane eventKey="#Proveedores">
          <div>uuuuuuu</div>
        </Tab.Pane>
      </Tab.Content>
    </Col>

  </Row>
  </ul>
</Tab.Container>

</div>
     /*

    <Button className="botones" action href ="#Proveedores" variant="outline-dark">
      <h1>
      Dark
      </h1>
      </Button>*/
    );

  }

}

