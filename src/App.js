
import { Controlled } from "./controlledcomponents/loginform";
import CartProvider from "./static-routes/cart-context";
import Navs from "./static-routes/navsection";


const App=()=> {
  return(

    <CartProvider>
    <div className='App'>
      
{/* <HandleNavigation/> */}
{/* <Mounting></Mounting> */}
<Navs></Navs>


</div>
</CartProvider>
  )
}

export default App;