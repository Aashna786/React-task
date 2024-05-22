import { BrowserRouter,Routes, Route } from "react-router-dom"
import Homescreen from "./home-screen"
import AboutScreen from "./about-screen"
import SettingsScreen from "./settings-screen"
import BlogScreen from "./blog-screen"
import InvalidScreen from "./invalid-screen"
import ProductDetails from "./productDetails"


const HandleNavigation=()=>{
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homescreen} />
        <Route path="/about" Component={AboutScreen}></Route>
        <Route path="/settings" Component={SettingsScreen}></Route>
        <Route path="/blog" Component={BlogScreen}></Route>

        <Route path="/products/:productId" Component={ProductDetails}></Route>

        <Route path="*" Component={InvalidScreen}></Route>
      </Routes>
      </BrowserRouter>


    )
}

export default HandleNavigation