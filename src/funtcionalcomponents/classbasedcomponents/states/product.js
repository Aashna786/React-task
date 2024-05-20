import { Component } from "react";

class Product extends Component {
  state = {
    ProductsArray: [
      {
        pic: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        count: 1,
      },

      {
        pic: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        count: 1,
      },

      {
        pic: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        count: 1,
      },

      {
        pic: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600",
        count: 1,
      },

      {
        pic: "https://images.pexels.com/photos/279480/pexels-photo-279480.jpeg?auto=compress&cs=tinysrgb&w=600",
        count: 1,
      },
    ],
  };

  changeAction = (action) => {
    switch (action) {
      case "INCREMENT":
        this.setState({
          count: this.state.ProductsArray.count + 1,
        });
        break;

      case "DECREMENT":
        if (this.state.ProductsArray.count > 0) {
          this.setState({
            count: this.state.ProductsArray.count - 1,
          });
        }
        break;

      case "RESET":
        this.setState({
          count: 0,
        });
        break;
      default:
        break;
    }
  };

 

  render() {
    return (
      <>

        {/* <h2>{this.state.message}</h2> */}
        <img src={this.state.ProductsArray.pic} height={200} width={200}></img>
        <h4>{this.state.count}</h4>

        <button onClick={() => this.changeAction("INCREMENT")}>
          Add to Cart
        </button>
        <button onClick={() => this.changeAction("DECREMENT")}>
          Remove from Cart
        </button>
        <button onClick={() => this.changeAction("RESET")}>Reset</button>
      </>
    );

  
  }
}


export default Product;
