import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";

const Rutas = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  );
};

export default Rutas;
