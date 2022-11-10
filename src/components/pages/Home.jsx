import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import Carrusel from '../carrusel/Carrusel'
import Navegacion from '../navegacion/Navegacion'
import Tarjetas from '../tarjetas/Tarjetas'

 const Home = () => {

  const[changeTitle, setChangeTitle] = useState(false);

  return (
    <>
      <Navegacion /> 
      <Carrusel />  
      <Tarjetas />
      <h1>{changeTitle ? 'Titulo Cambiado' : 'Titulo Original'}</h1>
      <button type='button' onClick={()=> setChangeTitle(!changeTitle)} className="mb-5"> Cambiar Titulo</button>
    </>
  )
}

export default Home