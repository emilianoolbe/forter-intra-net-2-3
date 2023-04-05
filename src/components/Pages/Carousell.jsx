import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const Carousell = () => {
  const RUTA = '/forter-intranet'

  return (
    <div className="allCarousel">
      <div className=" d-flex justify-content-center carousel">
        <Carousel fade variant="dark" className="arrows">
          <Carousel.Item>
            <Link to={`${RUTA}/calendario`}>
              <img
                className="d-block"
                src= {`${RUTA}/noticias/02.jpg`}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to= {`${RUTA}/calendario`}>
              <img
                className="d-block"
                src= {`${RUTA}/noticias/01.jpg`}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to= {`${RUTA}/calendario`}>
              <img
                className="d-block"
                src= {`${RUTA}/noticias/03.jpg`}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
