import React from "react";
import { Carousel } from "react-bootstrap";
// import img from '../../assets/img/imagen1.png';

const Carrusel = () => {
  const imagenes = [
    {
      id: 1,
      imagen: '../../assets/img/imagen1.png' ,
      titulo: "Titulo 1",
      descripcion: "Descripcion 1",
    },
    {
      id: 2,
      imagen: '../../assets/img/imagen1.png',
      titulo: "Titulo 2",
      descripcion: "Descripcion 2",
    },
    {
      id: 3,
      imagen: '../../assets/img/imagen1.png',
      titulo: "Titulo 3",
      descripcion: "Descripcion 3",
    },
  ];

  return (
    <>
      <Carousel>
        {imagenes.map((imagen) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagen.imagen}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carrusel;
