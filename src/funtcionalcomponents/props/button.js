
// const Buttoncomponent =(props)=>{
//     console.log(props,"props")

//     const {text,bgColor,buttonproperties:{width,height}}=props
//     return(
//         <button  style={{
//             backgroundColor:bgColor,
//             width:width,
//             height:height
//         }}>{text}</button>
//     )

// }

// export default Buttoncomponent



// const Buttoncomponent=(props)=>{

//     const {text,buttonproperties:{height,width},bgColor}=props

//     return(

//         <button style={{
//             text:text,
//             height:height,
//             width:width,
//             backgroundColor:bgColor
//         }}>{text}</button>
//     )
// }

// export default Buttoncomponent



// const Buttoncomponent=()=>{
//    const  login=false
//     return(
//         <>
//         {
//             login
//             &&
//             <orderlist>
//                 <li>Apple</li>
//                 <li>Banana</li>
//             </orderlist>
//         }
//         </>
//     )
// }

// export default Buttoncomponent



// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' }
//   ];
  
//   function UserList() {
//     return (
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     );
//   }
// export default UserList  



import React from 'react';

// Define a Wrapper component that uses the children prop
function Wrapper(props) {
  return (
    <div style={{ border: '2px solid black', padding: '10px', margin: '10px' }}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Wrapper>
        <h1>Hello, World!</h1>
        <p>This is a paragraph inside the wrapper.</p>
      </Wrapper>
      <Wrapper>
        <button>Click Me</button>
      </Wrapper>
    </div>
  );
}

export default App;
