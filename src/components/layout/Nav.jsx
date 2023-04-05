import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export const NavBarN = () => {
  const RUTA = '/forter-intranet'

  return (
    <>
      <Navbar expand="lg" bg="dark"  variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto nav fs-5" >
         
           
              <NavLink to = {RUTA} className='ancor ms-3'>Inicio</NavLink>
          
            <NavDropdown className="ancor2 ms-3" title="Personal" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://beta.es.reactjs.org/" target='_blank'>Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="ancor2 ms-3" title="Solicitudes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="ancor2 ms-3" title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            
              
              <NavLink to = {`${RUTA}/calendario`} className='ancor ms-3 me-4' >Calendario</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
