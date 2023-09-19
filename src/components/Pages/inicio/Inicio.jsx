import React, { useRef, useState } from "react";
import { Carousell } from "./components/Carousell";
import { Cumpleaños } from "./components/Cumpleaños";
import { Calendario } from "./components/Calendario";
import { Sorteos } from "./components/Sorteos";
import { Sugerencias } from "./components/Sugerencias";
import '../../../../public/styles/inicio.css';


export const Inicio = ({noticas}) => {

  //Estados
  const [pagina, setPagina] = useState(1);
  
  //Referencias
  const refPagina1 = useRef();
  const refPagina2 = useRef();

  //Métodos
  const cambiarPag = (e) => {
    if (e.target == refPagina2.current) {
      setPagina(2);
    } else if (e.target == refPagina1.current) {
      setPagina(1);
    }
  };

  return (
    <div className="inicio row justify-content-center">      
      <Carousell />

    
          <div className="calendario-container  col-4 ms-5"  >
            <Calendario />
          </div>

          <div className="cumpleaños-container col-4 ms-5" >     
            <Cumpleaños pagina={pagina}/>            
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
