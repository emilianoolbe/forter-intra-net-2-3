import React from "react";
import { Link } from "react-router-dom";

export const Calendario = ({noticias}) => {

  const RUTA = '/forter-intranet';
  
  return (
    <div className="calendario">
      <p className="fs-4 fw-bold text-center mt-4">Todas las noticias</p>

      <div className="row calendario-contenido">
        {
          noticias.map((noticia, i) => {
            return(
              <div className="noticia-item col-3" key={i}>
              <p className="fs-5 fw-bold">{noticia.titulo}</p>
    
              <div>
                <img className="d-blok" src={noticia.img}/>
              </div>
    
              <p>
                {noticia.descripcion} <Link className="ancor-noticia" to= {`${RUTA}/noticia/${noticia.id}`} > Ver más...</Link>
              </p>
            </div>
            )
          })
        }
      </div>
    </div>
  );
};
