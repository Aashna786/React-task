import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const EachProd = () => {
  const { id } = useParams();

  console.log(id);

  const [eachprod, setEachprod] = useState({});

  const { title, description, price, brand, category, thumbnail } = eachprod;

  useEffect(() => {
    fetchProd();
  }, [id]);

  const fetchProd = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    setEachprod(res.data);
  };
  console.log(eachprod);

  return (
    <>
      <NavBar />
      <>
        {Object.keys(eachprod).length > 0 ? (
          <Card className="text-center">
            <Card.Body>
              <Card.Img
                variant="top"
                src={thumbnail}
                height={550}
                width={250}
              />

              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text><b>Brand: </b>{brand}</Card.Text>
              <Card.Text><b>Category: </b>{category}</Card.Text>
              <Card.Text><b>Price: </b>${price}</Card.Text>
              <Button variant="outline-success">Add to Cart</Button>
            </Card.Body>
          </Card>
        ) : (
          <Spinner
            style={{
              height: "70px",
              width: "70px",
              margin: "250px 0px 0px 700px",
            }}
            animation="grow"
            variant="success"
          />
        )}
      </>
    </>
  );
};

export default EachProd;




