import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./cards";
import Navb from "./navbar1";
import GrowSpinner from "../funtcionalcomponents/card/spinner";

const Prods = () => {
  const [items, updateItems] = useState([]);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const dta = await axios.get("https://dummyjson.com/products");
    updateItems(dta.data.products);
  };
  //console.log(items);

  return (
    <>
      <Navb />
      {
        (items.length>0) ?
<div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {items.map((eachProduct) => {
          return (
            <>
              <Cards item={eachProduct} />
            </>
          );
        })}
      </div>
      :
      <GrowSpinner></GrowSpinner>
      }
      
    </>
  );
};

export default Prods;