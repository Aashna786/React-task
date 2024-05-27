
import { Controlled } from "./controlledcomponents/loginform";
import { UseState } from "./hooks/usestate";
import CartProvider from "./static-routes/cart-context";
import NavBar from "./static-routes/navbar";
import HandleNavigation from "./static-routes/navigative-stack";
import Navs from "./static-routes/navsection";


const App=()=> {
  return(

    // <CartProvider>
    <div className='App'>
      
<HandleNavigation/>
{/* <Mounting></Mounting> */}
<>
{/* <Navs></Navs> */}
{/* <HandleNavigation></HandleNavigation> */}
{/* <UseState></UseState> */}

</>

</div>
// </CartProvider>
  )
}

export default App;