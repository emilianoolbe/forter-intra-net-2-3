import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/Pages/Inicio";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Calendario } from "../components/Pages/Calendario";
import { Error404 } from "../components/Pages/Error404";
import { Noticia } from "../components/Pages/Noticia";
import {noticias} from '../helpers/data';

export const Enrutador = () => {

  //Estados
  const [usuario, setUsuario] = useState('');
  const [error, setError] = useState('');

  //Métodos

  const handlerLogin = e => {
      e.preventDefault();

      if (e.target.email.value === '' || e.target.password.value === '') {
        
        setError('Para poder inciar sesión debe ingresar usuario y contraseña'); 
      
      }else{
        let usuario = {
            email: e.target.email.value,
            password: e.target.password.value
        };
  
        {/* CONSULTA A API */ }
        setUsuario(usuario);
        setError('');
      };
  };
  

  if (usuario === '') {
    return (
      <>
        <div className="header-login bg-dark text-light">
          <div className=" fs-1 fw-bold ms-4">FORTER</div>
        </div>

        <div className="container login">

          <div className="error-login">{error}</div>

          <form onSubmit={handlerLogin}>
            <input type="text" name="email" placeholder='Usuario' />
            <input type="password" name="password" placeholder='Contraseña' />
            <input type="submit" value="Login" />
          </form>
        </div>
      </>
    )

  }else if (usuario === '' && error !== ''){

    
    return (
      <>
        <div className="header-login bg-dark text-light">
          <div className=" fs-1 fw-bold ms-4">FORTER</div>
        </div>
        
        <div className="container login">
            <form onSubmit={handlerLogin}>
              <input type="text" name="email" placeholder='Usuario' />
              <input type="password" name="password" placeholder='Contraseña' />
              <input type="submit" value="Login" />
            </form>
        </div>
      </>
    )

  }else if(usuario !== '' && error === ''){

    return (
      <>
        <BrowserRouter>
          {/* Header */}
          <Header usuario = {usuario} setUsuario = {setUsuario}/>
    
          {/* Contenido */}
          <Routes>
            <Route exact path= {import.meta.env.VITE_URL} element={<Inicio noticias={noticias} />} />
            <Route exact path= {`${import.meta.env.VITE_URL}/calendario`} element={<Calendario noticias={noticias} />} />
            <Route exact path= {`${import.meta.env.VITE_URL}/noticia/:id`} element={<Noticia noticias= {noticias}/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
    
          {/* Footer */}
          <Footer />
        </BrowserRouter>
      </>
    );
  }
};
