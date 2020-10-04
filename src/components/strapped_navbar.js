import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../Assets/logo/kara_creme.png';


class StrappedNavbar extends Component {
  render() {
    return(
        <Navbar bg="dark-blue" expand="lg" className="cust-navbar">
              <Navbar.Brand className="brand" href="#home">
                  <img
                    alt=""
                    src={ Logo }
                    height="50"
                    className="align-middle"
                  />{' '}

              </Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="burger-button" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto justify-content-start"style={{ width: "100%" }}>
              <Nav.Link href="#home"><span className="navItem">Home</span></Nav.Link>
              <Nav.Link href="#link"><span className="navItem">Link</span></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mr-auto justify-content-end"style={{ width: "100%" }}>
              <Nav.Link href="#signup"><span className="navItem glyphicon glyphicon-user">Sign Up</span></Nav.Link>
              <Nav.Link href="#login"><span className="navItem glyphicon glyphicon-log-in">Login In</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
export default StrappedNavbar;
