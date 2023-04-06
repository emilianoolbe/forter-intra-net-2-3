import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const Carousell = () => {

  return (
    <div className="allCarousel">
      <div className=" d-flex justify-content-center carousel">
        <Carousel fade variant="dark" className="arrows">
          <Carousel.Item>
            <Link to={`${import.meta.env.VITE_URL}/calendario`}>
              <img
                className="d-block"
                src= {`${import.meta.env.VITE_URL}/noticias/02.jpg`}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to= {`${import.meta.env.VITE_URL}/calendario`}>
              <img
                className="d-block"
                src= {`${import.meta.env.VITE_URL}/noticias/01.jpg`}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to= {`${import.meta.env.VITE_URL}/calendario`}>
              <img
                className="d-block"
                src= {`${import.meta.env.VITE_URL}/noticias/03.jpg`}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
