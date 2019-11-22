/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://carappunal2019-2.000webhostapp.com/presentation.html">Acerca de</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/UNAL-TEAMS">Repositorio</NavLink>
            </NavItem>
          </Nav>       
          <div className="copyright">
            Design by: 
              <a
                href="javascript:void(0)"
                rel="noopener noreferrer"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
          </div> 
          
          <div className="copyright">
            © {new Date().getFullYear()} Car App{" "}
          </div>  
        </Container>
      </footer>
    );
  }
}

export default Footer;
