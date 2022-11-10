import axios from "axios";
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from "react-bootstrap";

const baseURL = "https://restapi-nodejsandmysql-productos-production.up.railway.app/api/productos";


export default function CardsEcommerce() {
  const [post, setPost] = React.useState(null); 

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return null;
 
  console.log(post)

  return (
    <>
      <Container fluid="md">
        <Row xs={1} md={4} className="g-4">
          {post.map((producto) => {
            return (
              <Col>
                <Card className="h-100 mb-5 mt-4" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={producto.imagenProducto} />
                  <Card.Body>
                    <Card.Title>{producto.nombreProducto}</Card.Title>
                    <Card.Text>
                      {/* {producto.details.types.map((type) => {
                          return <p>{type.type.name}</p>;
                      })}                    */}
                    </Card.Text>
                    <Button variant="primary">Ver más...</Button>
                  </Card.Body>
                </Card>              
              </Col>
            );
          })}    
        </Row>
      </Container>  

    </>
  );

}


 