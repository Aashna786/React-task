// import Buttoncomponent from './components/props/button';
// import logo from './logo.svg';
// import './App.css';
// import './components/tables.css'
// import Table from './components/tables';
// import List from './components/lists';
// import Form from './components/forms';
// import Image from './components/image';
// import Listcomponents from './components/listcomponents';
// import Orderedlist from './components/orderedlist';
// import Listitems from './components/listitems';
// import Heading from './components/classbasedcomponents/heading';
// import Image ,{Heading}from './components/classbasedcomponents/Image';
// import Table from './components/classbasedcomponents/table1';
// import './components/classbasedcomponents/table1.css';
// import Form1 from './components/classbasedcomponents/form1';
// import List1 from './components/classbasedcomponents/list1';
// import Mod from './components/modal/modal';
// import Cur from './components/carousel/carousel';
// import UncontrolledExample from './components/carousel/carousel';

import TodoComponent from "./components/classbasedcomponents/states/todolist";

// import Product from "./components/classbasedcomponents/states/product";

// import Fakestoreapi from "./components/card/card";
// import Data from "./components/card/data";
// import Buttoncomponent from "./components/props/button";
// import Listitems from "./components/iplteams";





// const App=()=> {
//   return(
//      <div className='App'>

//     {/* <Table></Table>
//     <List></List>
//     <Form></Form>
//     <Image></Image> */}
//     {/* <Listcomponents/> */}
//     {/* <Orderedlist/> */}
//     {/* <Listitems></Listitems> */}

//     {/* <Heading></Heading> */}
//     {/* <Image></Image> */}
//     {/* <Table></Table> */}
//     {/* <Form1></Form1> */}
//     {/* <List1></List1> */}

//     {/* <Mod></Mod> */}
//     {/* <Cur></Cur> */}


 
//  <Buttoncomponent  buttontext={"SIGNUP"}  bgColor={"blue"}  buttonproperties={{

// width:200,
// height:200
// }} />
// <Buttoncomponent  buttontext={"LOGIN"}  bgColor={"green"}  buttonproperties={{
   
// width:200,
// height:200
  
// }} />
// <Buttoncomponent  buttontext={"SUBMIT"}  bgColor={"red"}  buttonproperties={{

//    width:200,
//    height:200
// }}  />  

//      </div> 
//   )

// }
// export default App;



// const App=()=>{
//   const buttonArray=[
//     {
//       text:"sign up",
//       height: 100,
//       width:100,
//       bgColor:"blue",
//       id:1
//      },

//      {
//       text:"login",
//       height: 100,
//       width:100,
//       bgColor:"red",
//       id:2
//      },

//      {
//       text:"submit",
//       height: 100,
//       width:100,
//       bgColor:"green",
//       id:3
//      },
//      {
//       text:"click me",
//       height: 100,
//       width:100,
//       bgColor:"violet",
//       id:4
//      }
// ]
//   return(

//     <div>
//    {
// buttonArray.map((eachbutton)=>{

//   const {text,width,height,bgColor,id}=eachbutton

// return(
//   <Buttoncomponent
//   key={id}   
//   text={text}  
//   bgColor={bgColor} 
//   buttonproperties={
//   {
//   width:width,
//   height:height
// }
// }
  
//   ></Buttoncomponent>
// )

// })
//    }
//     </div>
//   )
// }

// export default App;



const App=()=>{
  return(
<div>
  {/* <Data></Data> */}

  {/* <Product></Product> */}
  
  {/* <Listitems></Listitems> */}

  <TodoComponent></TodoComponent>
</div>
  )
}

export default App;