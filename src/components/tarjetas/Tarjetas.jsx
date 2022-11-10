import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Tarjetas = () => {
  return (
    <>
     <Card className='mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_813398-MLA49715524038_042022-O.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Tarjetas