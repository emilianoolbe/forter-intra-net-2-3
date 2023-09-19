import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../../public/styles/noticias.css';

export const Noticias = ({noticias}) => {
  
  useEffect(() => {
    console.log(noticias);
  }, [])

  if (noticias){
    return (    
      <div className="noticias-container">
        <div className="row justify-content-center aling-items-center w-50 mt-4">
          {
            noticias.map((noticia, i) => {
              return(
              <div className="noticia col-5" key={i}>
                  <img src={noticia.img} alt="" />
                  <h3>{noticia.titulo}</h3>
                  <div className="text-wrap">{noticia.informacion}</div>
                  
                  <Link className='leerMas' to={`${import.meta.env.VITE_URL}/noticia/${noticia.id}`}>
                    LEER MÁS
                  </Link>
              </div>
              )
            })
          }
        </div>
      </div>      
    );
  }else{
    return(
        <div>..Cargando</div>
    )
  }
};
