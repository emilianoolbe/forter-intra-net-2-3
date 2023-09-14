import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import '../../../public/styles/navbar.css';

export const NavBarN = ({usuario, setUsuario}) => {

  //Métodos 
  const handlerLogout = () => {
    
    setUsuario('');
    {/* Quitar de sesión */}

  };
  
  return (
    <> 
    <div className="navNar">      
      <div className="fs-1 title-forter">
          FORTER 
      </div>
      <Navbar expand="lg" className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="nav fs-5" >
            <NavLink to = '/' className={({isActive}) => isActive ? 'isActive' : 'ancor'}>INICIO</NavLink>          
            {/* <NavDropdown className="ancor2 ms-3" title="NOTICIAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://beta.es.reactjs.org/" target='_blank'>Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="ancor2 ms-3" title="CALENDARIO" id="basic-nav-dropdown">
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
            </NavDropdown> */}
              <NavLink to = {`${import.meta.env.VITE_URL}/noticias`} className={({isActive}) => isActive ? 'isActive' : 'ancor'} >NOTICIAS</NavLink>
              <NavLink to = {`${import.meta.env.VITE_URL}/calendario`} className={({isActive}) => isActive ? 'isActive' : 'ancor'} >CALENDARIO</NavLink>
              <NavLink to = {`${import.meta.env.VITE_URL}/sugerencias`} className={({isActive}) => isActive ? 'isActive' : 'ancor'} >SUGERENCIAS</NavLink>

              <NavLink to = {`${import.meta.env.VITE_URL}`} onClick={handlerLogout} className='ancor'> SALIR </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  );
};
