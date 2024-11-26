import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Placeholder text for the card description.
              </Card.Text>
              <Button variant="primary">Hola</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
