import { BrowserRouter, Route, Routes } from "react-router-dom"
import Prods from "./home1"
import About from "./about1"
import Contact from "./contact"
import EachProd from "./productDetails"
import CartProducts from "./cart-products"



const Navs = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Prods}/>
            <Route path='/About' Component={About}/>
            <Route path="/Contact" Component={Contact}/>
            <Route path="/:Product/:id" Component={EachProd}/>

            <Route path="/cart-products" Component={CartProducts}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Navs