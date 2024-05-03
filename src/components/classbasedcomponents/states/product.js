import { Component } from "react";

class Product extends Component {
  state = {
    message: "My Product",
    pic:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    count:1
  };

  changeAction = (action) => {
    switch (action) {

      case "INCREMENT":
        this.setState({
          count: this.state.count + 1,
        });
        break;

      case "DECREMENT":
        if (this.state.count > 0) {
          this.setState({
            count: this.state.count - 1,
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
        <h2>{this.state.message}</h2>
        <img src={this.state.pic}  height={200} width={200}></img>
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
