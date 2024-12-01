import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = () => {
  return (
    <Container className="mt-5">
      <Row>
        {/* First Card */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Description for the first card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Description for the second card.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Third Card */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Description for the third card.
              </Card.Text>
              <Button variant="success">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
         {/* 4 Card */}
         <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 4</Card.Title>
              <Card.Text>
                Description for the first card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 5 Card */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 5</Card.Title>
              <Card.Text>
                Description for the second card.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 6 Card */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 6</Card.Title>
              <Card.Text>
                Description for the third card.
              </Card.Text>
              <Button variant="success">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
