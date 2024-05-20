import axios from "axios";

const { Component } = require("react");

class Practice extends Component {
  //   state = {
  //     count: 0,
  //   };

  //    incrementAction=()=>{

  //   //     this.setState({
  //   //         count:this.state.count+1
  //   //     })
  //   // }

  //   // decrementAction=()=>{
  //   //     this.setState({
  //   //         count:this.state.count-1
  //   //     })
  //   // }

  //   // restAction=()=>{
  //   //     this.setState({
  //   //         count:0
  //   //     })
  //    }

  //   changeAction = (action) => {
  //     switch (action) {
  //       case "INCREMENT":
  //         this.setState({
  //           count: this.state.count + 1,
  //         });
  //         break;

  //       case "DECREMENT":
  //         if (this.state.count > 0) {
  //           this.setState({
  //             count: this.state.count - 1,
  //           });
  //         }
  //         break;

  //       case "RESET":
  //         this.setState({
  //           count: 0,
  //         });
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  //   render() {
  //     return (
  //       <>
  //         <h2>Counter</h2>
  //         <h3>{this.state.count}</h3>
  //         <button onClick={() => this.changeAction("INCREMENT")}>
  //           Increment
  //         </button>
  //         <button onClick={() => this.changeAction("DECREMENT")}>
  //           Decrement
  //         </button>
  //         <button onClick={() => this.changeAction("RESET")}>Reset</button>
  //       </>
  //     );
  //   }

componentDidMount(){
 
  this.fetchData()
}

fetchData=async ()=>{
try{
  const result=await axios.get("https://fakestoreapi.com/products")
console.log(result)
}
catch(err)
{
  console.log("Error Occurs")
}


}


  render() {
    return (
    <>

<h3>Fakestoreapi</h3>

    </>
    )
  }
}

export default Practice;
