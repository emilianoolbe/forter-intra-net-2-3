import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import '../../../../../public/styles/carousel.css';

export const Carousell = () => {

  return (
    <div className="allCarousel">
      <div>
        <Carousel  id="carouselPortada" fade variant="dark" controls={false} >
          <Carousel.Item id="carouselPortada-item">
            <Link to={`${import.meta.env.VITE_URL}/calendario`}>
              <img            
                // src= {`${import.meta.env.VITE_URL}/noticias/02.jpg`}
                src="./noticias/banner-portada.jpeg"
                alt="First slide"
              />
            </Link>
              <Carousel.Caption id="carouselCaption-item">
                <h1 className="text-start">TÍTULO DE UNA NOTICIA</h1>
                <p className="text-start leer-mas-container">LEER MÁS</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item  id="carouselPortada-item">
            <Link to= {`${import.meta.env.VITE_URL}/calendario`}>
              <img
                className="d-block"
                // src= {`${import.meta.env.VITE_URL}/noticias/01.jpg`}
                src="./noticias/banner-portada2.jpeg"
                alt="Second slide"
              />
               <Carousel.Caption id="carouselCaption-item">
                <h1 className="text-start text-wrap">TÍTULO DE UNA NOTICIA</h1>
                <p className="text-start leer-mas-container">LEER MÁS</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item  id="carouselPortada-item">
            <Link to= {`${import.meta.env.VITE_URL}/calendario`}>
              <img
                className="d-block"
                // src= {`${import.meta.env.VITE_URL}/noticias/03.jpg`}
                src="./noticias/banner-portada.jpeg"
                alt="Third slide"
              />
               <Carousel.Caption id="carouselCaption-item">
                <h1 className="text-start">TÍTULO DE UNA NOTICIA</h1>
                <p className="text-start leer-mas-container">LEER MÁS</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
