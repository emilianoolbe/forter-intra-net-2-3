import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import '../../../../../public/styles/cumpleaños.css';

// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

export const Cumpleaños = ({ pagina }) => {
  //Estados
  const [funcionarios, setFuncionarios] = useState([]);
  const [errores, setErrores] = useState("");

  //Efectos
  useEffect(() => {
    conseguirFuncinarios(pagina);
  }, [pagina]);

  //Métodos
  const conseguirFuncinarios = async (pagina) => {
    let url = `https://reqres.in/api/users?page=${pagina}`;

    try {
      const PETICION = await fetch(url);
      const { data } = await PETICION.json();
      setFuncionarios(data);
      setErrores("");
    } catch (err) {
      setErrores(`Error en la petición de funcionarios`);
    }
  };

  if (errores !== "") {
    return (
      <div className=" container row justify-content-around align-items-center mt-4 mb-4">
        <h3 className="text-center">Cumpleaños del mes</h3>
        <p className="fs-4 fw-bold text-center error-mensaje">
          {" "}
          No se han podido cargar los cumpleaños {errores}
        </p>
      </div>
    );
  } else if (errores === "") {
    // return (
    //   <div className="cumpleaños row justify-content-center mt-5 mb-4">
    //     <h3 className="text-center">Cumpleaños del mes</h3>

    //     {funcionarios.map((empleado, i) => {
    //       return (
    //         <div className = "row justify-content-center aling-items-center  col-lg-4 col-md-12 all" key={i} >
           
    //             <Card
    //               style={{ width: "12rem" }}
    //               className="card row justify-content-center align-items-center"
    //               border="light"
    //             >
    //               <div>
    //                 <Card.Img src={empleado.avatar} />
    //               </div>
                  
    //               <div className="ms-1 card-body">
                    
    //               <Card.Body>
    //                 <Card.Header className="text-center fw-bold bg text-light">
    //                   {empleado.first_name} {empleado.last_name}
    //                 </Card.Header>
    //                 <ListGroup className="text-dark fw-bold list" border="light">
    //                   <ListGroup.Item>Edad: </ListGroup.Item>
    //                   <ListGroup.Item>Fecha:</ListGroup.Item>
    //                   <ListGroup.Item>Sector:</ListGroup.Item>
                 
      
    //                 </ListGroup>
    //               </Card.Body>
    //               </div>

    //             </Card>             
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
    return(  
          <Carousel id="carouselCumpleaños" fade variant="dark" controls={true} indicators={false}>
            {funcionarios.map((empleado, i) => {
              return(
                <Carousel.Item key={i} id="carouselCumpleaños-item">
                 
                  <img                                     
                      src={empleado.avatar}
                      alt="First slide"
                  />
          
                    <div id="carouselCumpleaños-caption"> 
                      <h1>¡FELIZ CUMPLEAÑOS {empleado.first_name}!</h1>             
                      <button>
                          SALUDA A {empleado.first_name}                
                      </button>                   
                                  
                    </div>
                </Carousel.Item>

              )
            })};        
          </Carousel>
    )
  }
};
