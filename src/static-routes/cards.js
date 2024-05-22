import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
    const {brand,category,price,rating,thumbnail,title,id}=props.item
    // const [count, updateCount] = useState(0)
    
  return (
    <>
      <Card style={{ width: "30%",  backgroundColor:"plum"}}>
        <Card.Img variant="top" src={thumbnail} height={250}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {category}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><b>Brand: </b>{brand}</ListGroup.Item>
          <ListGroup.Item><b>Price: </b>${price}</ListGroup.Item>
          <ListGroup.Item><b>Rating: </b>{rating}</ListGroup.Item>
        </ListGroup>
       <Button variant="secondary"><b>
        <Link to={`/${category}/${id}`} style={{textDecoration:"none",color:"white"}}>Details</Link></b></Button>
      </Card>
    </>
  );
};

export default Cards;