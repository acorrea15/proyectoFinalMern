import React from "react";
import { Carousel } from "react-bootstrap";
// import img from '../../assets/img/imagen1.png';

const Carrusel = () => {
  const imagenes = [
    {
      id: 1,
      imagen: 'https://tiendacentro.com/wp-content/uploads/2022/05/MotoG41-NegroOnix-Dual.webp' ,
      titulo: "Titulo 1",
      descripcion: "Descripcion 1",
    },
    {
      id: 2,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_963862-MLA45041918050_032021-O.webp',
      titulo: "Titulo 2",
      descripcion: "Descripcion 2",
    },
    {
      id: 3,
      imagen: 'https://www.computershopping.com.ar/Images/Productos/Grandes/LF27T350FHL_Foto0g.jpg',
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
              className="d-block w-25"
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
