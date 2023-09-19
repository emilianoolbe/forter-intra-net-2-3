import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../../../public/styles/noticia.css';
import { noticiasDeInteres } from '../../helpers/dataInteres';


export const Noticia = ({noticias}) => {

    let {id} = useParams();
    let noticia = noticias.filter(noticia => {return noticia.id == id});
    noticia = noticia[0];

    return (
        <div className='noticiaU'>
           <div className='row justify-content-center'>           
                <span className='col-8'>                   
                    <img src= {`../${noticia.img}`} />
                    <h3 className='text-wrap'>{noticia.titulo}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        A officiis eaque ipsum non debitis, consequatur dolores provident sit placeat libero vero 
                        adipisci similique eius soluta tempora atque. Earum, dignissimos voluptas.
                        Lorem ipsum.
                    </p>
                </span>

                <hr className='w-50 mt-5'/>

                <div className='col-8'>
                    <h3>Otras noticias que podrian interesarte...</h3>
                    <div className='row justify-content-center'>
                    {
                        noticiasDeInteres.map((noticia, i) => {
                            return(
                                <div className="noticia-interes col-4" key={i}>
                                    <img src={noticia.img} alt="" />
                                    <h5>{noticia.titulo}</h5>                                
                                    
                                    <Link to={`${import.meta.env.VITE_URL}/noticia/${noticia.id}`}>
                                    LEER MÁS
                                    </Link>
                                </div>                           
                            )
                        })
                    }
                    <Link className='todas-las-noticias' to={`${import.meta.env.VITE_URL}/noticias`}>TODAS LAS NOTICIAS</Link>          
                    </div>                  
                </div>
           </div>
        </div>
    );
};
