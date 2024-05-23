import { useContext } from 'react';
import { CartContext } from './cart-context';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h3>Cart Products</h3>
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <Card key={index} className="mt-3">
            <Card.Body>
              <Card.Img variant="top" src={product.thumbnail} height={"200px"} width={"200px"} />
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><b>Brand: </b>{product.brand}</Card.Text>
              <Card.Text><b>Category: </b>{product.category}</Card.Text>
              <Card.Text><b>Price: </b>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
