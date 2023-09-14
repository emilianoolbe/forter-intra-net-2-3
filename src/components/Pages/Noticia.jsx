import React from 'react'
import { useParams } from 'react-router-dom'
import '../../../public/styles/noticia.css';

export const Noticia = ({noticias}) => {

    let {id} = useParams();
    let noticia = noticias.filter(noticia => {return noticia.id == id});
    noticia = noticia[0];

    return (
        <div className='noticia'>
           <div className='noticia-container'>
           
                    <h3 className='mt-4 mb-4 text-center'>{noticia.titulo}</h3>
            
                    <img className="d-blok" src= {`../${noticia.img}`} />
            
                    <div className='mt-4 mb-4'>
                        {noticia.informacion}
                    </div>
              
           </div>
        </div>
    )
}
