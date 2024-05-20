import axios from "axios";
import NavBar from "./navbar";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result);
    if (result.status === 200) setProducts(result.data);
  };

  return (
    <div>
      <NavBar></NavBar>
      <h3>Welcome to Homescreen</h3>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>

      {products.map((eachproduct) => {
        return (
          <div key={eachproduct.id} className="col-md-4 mb-4">
            <Card id="card">
              <Card.Img
                variant="top"
                src={eachproduct.image}
                height={250}
                width={150}
                id="image"
              />
              <Card.Body>
                <Card.Title>{eachproduct.title}</Card.Title>
                <Card.Text>{eachproduct.description}</Card.Text>
                <Card.Text>Price: ${eachproduct.price}</Card.Text>
                <Card.Text>
                  Rating: {eachproduct.rating.rate} ({eachproduct.rating.count}{" "}
                  reviews)
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Homescreen;
