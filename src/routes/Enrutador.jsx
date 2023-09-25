import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/Pages/inicio/Inicio";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Noticias } from "../components/Pages/Noticias";
import { Error404 } from "../components/Pages/Error404";
import { Noticia } from "../components/Pages/Noticia";
import { Sugerencias } from "../components/Pages/inicio/components/Sugerencias";
import { Calendario } from "../components/Pages/inicio/components/Calendario";
import '../../public/styles/login.css';

export const Enrutador = () => {

    return (
      <>
        <BrowserRouter>
          {/* Header */}
          <Header />
    
          {/* Contenido */}
          <Routes>
            <Route exact path= {`${import.meta.env.VITE_URL}`} element={<Inicio />} />
            <Route exact path= {`${import.meta.env.VITE_URL}/noticias`} element={<Noticias />} />
            <Route exact path= {`${import.meta.env.VITE_URL}/noticia/:id`} element={<Noticia />} />
            <Route exact path= {`${import.meta.env.VITE_URL}/calendario`} element={<Calendario/>} />                        
            <Route exact path= {`${import.meta.env.VITE_URL}/sugerencias`} element={<Sugerencias/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
    
          {/* Footer */}
          <Footer />
        </BrowserRouter>
      </>
    );
 };


