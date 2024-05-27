import React from "react"
import NavBar from "./navbar"
import UseCallbackExample from "../funtcionalcomponents/usecallback/useCallback"
import { useSelector } from "react-redux"

const BlogScreen=()=>{
   
    const {bookCount}=useSelector(state=>state);
    return(
        <>
        <NavBar></NavBar>
        <h3>Welcome to BlogScreen</h3>
        <h3>Book Count {bookCount}</h3>
        {/* <UseCallbackExample></UseCallbackExample> */}
    </>
    )

}

export default BlogScreen