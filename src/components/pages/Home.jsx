import React from 'react'
import { Button } from 'react-bootstrap'
import Carrusel from '../carrusel/Carrusel'
import Navegacion from '../navegacion/Navegacion'
import Tarjetas from '../tarjetas/Tarjetas'




 const Home = () => {
  return (
    <>
    <Navegacion /> 
    <Carrusel />  
    <Tarjetas />
    <h1>Titulo Original</h1>
    <Button> Cambiar el titulo</Button>
    </>
  )
}

export default Home