import React from 'react'
import Navegacion from '../navegacion/Navegacion'
import CardsEcommerce from "../cardsEcommerce/CardsEcommerce";



 const Home = () => {
  return (
    <>
        <Navegacion /> 
        <h1>Productos</h1> 
        <CardsEcommerce />
    </>
  )
}

export default Home