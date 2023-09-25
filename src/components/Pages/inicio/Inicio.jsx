import React from "react";
import { Carousell } from "./components/Carousell";
import { Cumpleaños } from "./components/Cumpleaños";
import { Calendario } from "./components/Calendario";
import { Sorteos } from "./components/Sorteos";
import { Sugerencias } from "./components/Sugerencias";
import '../../../../public/styles/inicio.css';


export const Inicio = () => {
  
  return (
    <div className="inicio row justify-content-center">      
          <Carousell />
    
          <div className="calendario-container  col-4 ms-5"  >
            <Calendario />
          </div>

          <div className="cumpleaños-container col-4 ms-5" >     
            <Cumpleaños />            
          </div>

          <div className="sorteos-container col-8">          
            <Sorteos />
          </div>

          <div className="sugerencias col-8">
            <Sugerencias />
          </div>
    

    </div>
  );
};
