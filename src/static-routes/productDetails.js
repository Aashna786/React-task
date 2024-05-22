import { useContext, useEffect, useState } from "react";
import NavBar from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { CartContext } from "./cart-context";
import { Alert } from "react-bootstrap";

const EachProd = () => {
  const { id } = useParams();
  const {addToCart}=useContext(CartContext)
  const [eachprod, setEachprod] = useState({});
  const[showAlert,setShowAlert]=useState(false);


  const { title, description, price, brand, category, thumbnail } = eachprod;

  useEffect(() => {
    fetchProd();
  }, [id]);


  const fetchProd = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log('Product data fetched:', res.data);
    setEachprod(res.data);
  };

const handleAddToCart=()=>{
  console.log('Adding to cart:',eachprod);
  addToCart(eachprod);
  setShowAlert(true);
  setTimeout(()=>setShowAlert(false),3000);
};

  return (
    <>
      <NavBar />
<div className="container mt-5">

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
              <Button variant="outline-success"  onClick={handleAddToCart}>Add to Cart</Button>
            
            {showAlert && (
              <Alert variant="success" onClose={()=>setShowAlert(false)} dismissible>
                Product has been added to your Cart!
              </Alert>
            )}
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
</div>
      </>
  );
};

export default EachProd;





