import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews } from '../../helpers/getNews';
import { useDispatch, useSelector } from "react-redux";
import { setNoticias } from "../../reducer/noticias/noticiasSlice";
import '../../../public/styles/noticias.css';
import { getUser } from "../../helpers/getUser";

export const Noticias = () => {

  const dispatch = useDispatch();
  const {noticiasList}  = useSelector(state => state.news);

  //Efectos
  useEffect(() => {
    if (getNews) {
      dispatch(setNoticias(getNews()));
    }
    const USERS = getUser()
    console.log(USERS);
  },[dispatch]);


  if (noticiasList){
    return (    
      <div className="noticias-container">
        <div className="row justify-content-center aling-items-center w-50 mt-4">
          {
            noticiasList.map((noticia, i) => {
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
