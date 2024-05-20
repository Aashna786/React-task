import axios from "axios";
import React, { useEffect, useState } from "react";

const Task1 = () => {
  const [product, setProduct] = useState([]);
  const [eachProduct, setEachProduct] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData1();
  }, [product]);

  const fetchData = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products`);
    // const result=await axios.get("https://fakestoreapi.com/products")
    console.log("result: ", result);
    if (result.status === 200) 
      setProduct(result.data);
  };

  const fetchData1 = async (id) => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // const result=await axios.get("https://fakestoreapi.com/products")
    console.log("result: ", result);
    if (result.status === 200) setEachProduct(result.data);
  };

  return (
    <>
      <h3>Task1</h3>
      {product.map((each) => {
        return <button onClick={() => fetchData1(each.id)}>{each.id}</button>;
      })}
      <h1>{eachProduct.title}</h1>
      <h1>{eachProduct.price}</h1>
    </>
  );
};

export default Task1;
