import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/Pages/Inicio";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Calendario } from "../components/Pages/Calendario";
import { Error404 } from "../components/Pages/Error404";
import { Noticia } from "../components/Pages/Noticia";

export const Enrutador = () => {
  let noticias = [
    {
      id: 5,
      titulo: "Titulo noticia 5",
      descripcion:
        "Breve descripción -sectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere r",
      informacion:
        "             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt cum rem magnam iusto, corporis, a voluptatibus eligendi excepturi aspernatur unde, minus architecto molestiae. Nobis iure adipisci modi ratione ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere ratione iure doloribus fugit minima. Eos, esse ut voluptate at pariatur voluptatibus",
      img: "./noticias/01.jpg",
    },
    {
      id: 4,
      titulo: "Titulo noticia 4",
      descripcion:
        "Breve descripción -sectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere r",
      informacion:
        "             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt cum rem magnam iusto, corporis, a voluptatibus eligendi excepturi aspernatur unde, minus architecto molestiae. Nobis iure adipisci modi ratione ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere ratione iure doloribus fugit minima. Eos, esse ut voluptate at pariatur voluptatibus",
      img: "./noticias/03.jpg",
    },
    {
      id: 3,
      titulo: "Titulo noticia 3",
      descripcion:
        "Breve descripción -sectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere r",
      informacion:
        "             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt cum rem magnam iusto, corporis, a voluptatibus eligendi excepturi aspernatur unde, minus architecto molestiae. Nobis iure adipisci modi ratione ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere ratione iure doloribus fugit minima. Eos, esse ut voluptate at pariatur voluptatibus",
      img: "./noticias/03.jpg",
    },
    {
      id: 2,
      titulo: "Titulo noticia 2",
      descripcion:
        "Breve descripción -sectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere r",
      informacion:
        "             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt cum rem magnam iusto, corporis, a voluptatibus eligendi excepturi aspernatur unde, minus architecto molestiae. Nobis iure adipisci modi ratione ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere ratione iure doloribus fugit minima. Eos, esse ut voluptate at pariatur voluptatibus",
      img: "./noticias/01.jpg",
    },
    {
      id: 1,
      titulo: "Titulo noticia 1",
      descripcion:
        "Breve descripción - sectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere r",
      informacion:
        "             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt cum rem magnam iusto, corporis, a voluptatibus eligendi excepturi aspernatur unde, minus architecto molestiae. Nobis iure adipisci modi ratione ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit et, quos illum esse ducimus atque tempore, facere ratione iure doloribus fugit minima. Eos, esse ut voluptate at pariatur voluptatibus",
      img: "./noticias/02.jpg",
    },
  ];

  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <Header />

        {/* Contenido */}
        <Routes>
          <Route exact path= {import.meta.env.VITE_URL} element={<Inicio noticias={noticias} />} />
          <Route exact path= {`${import.meta.env.VITE_URL}/calendario`} element={<Calendario noticias={noticias} />} />
          <Route exact path= {`${import.meta.env.VITE_URL}/noticia/:id`} element={<Noticia noticias= {noticias}/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </>
  );
};
