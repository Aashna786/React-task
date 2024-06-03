
import { Controlled } from "./controlledcomponents/loginform";
import UserList from "./funtcionalcomponents/props/button";
import Buttoncomponent from "./funtcionalcomponents/props/button";
import { UseState } from "./hooks/usestate";
import CartProvider from "./static-routes/cart-context";
import NavBar from "./static-routes/navbar";
import HandleNavigation, { Counter } from "./static-routes/navigative-stack";
import Navs from "./static-routes/navsection";


const App=()=> {
  return(

    // <CartProvider>
    <div className='App'>
      
{/* <HandleNavigation/> */}
{/* <Mounting></Mounting> */}
<>
{/* <Navs></Navs> */}
{/* <HandleNavigation></HandleNavigation> */}
{/* <UseState></UseState> */}
{/* <Buttoncomponent></Buttoncomponent> */}
{/* <UserList></UserList> */}
<Counter></Counter>

</>

</div>
// </CartProvider>
  )
}

export default App;




