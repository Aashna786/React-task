import React from "react";
import Button from "react-bootstrap/Button";

const { Component } = require("react");

class TodoComponent extends Component {
  state = {
    FruitsArray: [
      {
        id: 1,
        name: "Apple",
      },

      {
        id: 2,
        name: "Banana",
      },

      {
        id: 3,
        name: "Orange",
      },

      {
        id: 4,
        name: "Water melon",
      },
      {
        id: 5,
        name: "Sapota",
      },

      {
        id: 6,
        name: "Strawberry",
      },

      {
        id: 7,
        name: "Kiwi",
      },

      {
        id: 8,
        name: "Pomogranate",
      },

      {
        id: 9,
        name: "Custard Apple",
      },

      {
        id: 10,
        name: "PineApple",
      },
    ],
  };

  // constructor(){
  // super()

  //     this.state={

  //         todos:["apple","Banana"]
  //     }
  // }

  addFruit = () => {
    const newState = [...this.state.FruitsArray, { name: "Muskmelon" }];

    this.setState({
      FruitsArray: newState,
    });
  };

  clearAllfruits = () => {
    const newState = [];

    this.setState({
      FruitsArray: newState,
    });
  };

  deleteFruit = (id) => {
    const filteredArray = this.state.FruitsArray.filter((item, i) => i !== id);

    this.setState({
      FruitsArray: filteredArray,
    });
  };

  updateFruit = (id) => {
    let updatedFruit = this.state.FruitsArray.map((eachFruit, i) => {
      if (i === id) {
        return { name: "Musk melon" };
      } else {
        return eachFruit;
      }
    });

    this.setState({
      FruitsArray: updatedFruit,
    });
  };

  render() {
    return (
      <>
        <h2>Todo Component</h2>
        <Button variant="success" onClick={this.addFruit}>
          add Fruit
        </Button>
        <Button variant="warning" onClick={this.clearAllfruits}>
          clearAllfruits
        </Button>

        {this.state.FruitsArray.map((eachFruit, id) => {
          return (
            <React.Fragment>
              <h3>
                {id + 1} . {eachFruit.name}
              </h3>
              <Button variant="danger" onClick={() => this.deleteFruit(id)}>
                delete fruit
              </Button>
              <Button variant="info" onClick={() => this.updateFruit(id)}>
                update fruit
              </Button>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default TodoComponent;
