import React from 'react';
import { Button } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <Button variant="outline-primary" className="ms-auto">
      <i className="bi bi-cart"></i> Cart
    </Button>
  );
};

export default CartWidget;
