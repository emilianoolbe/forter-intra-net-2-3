import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export const NavBarN = ({usuario, setUsuario}) => {

  //Métodos 
  const handlerLogout = () => {
    
    setUsuario('');
    {/* Quitar de sesión */}

  };
  
  return (
    <>
      <Navbar expand="lg" bg="dark"  variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto nav fs-5" >
         
           
              <NavLink to = {import.meta.env.VITE_URL} className='ancor ms-3'>Inicio</NavLink>
          
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
              
              <NavLink to = {`${import.meta.env.VITE_URL}/calendario`} className='ancor ms-3 me-4' >Calendario</NavLink>

              <NavLink to = {`${import.meta.env.VITE_URL}`} onClick={handlerLogout} className='ancor me-3'> Salir </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
