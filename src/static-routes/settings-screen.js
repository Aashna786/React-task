import React from "react"
import NavBar from "./navbar"
import { useDispatch, useSelector } from "react-redux"
import { buyBookFunction, returnBookFunction } from "../redux/actions"

const SettingsScreen=()=>{
const dispatch=useDispatch()
const {bookCount}=useSelector(state=>state);

const bookBuy=()=>{
dispatch( buyBookFunction())
}

const bookReturn=()=>{
    dispatch( returnBookFunction())
    }

    return(
        <>
       <NavBar></NavBar> 
       <button onClick={bookBuy}>BUY BOOK</button>
       <button onClick={bookReturn}>RETURN BOOK</button>
       <h2>Book count {bookCount}</h2>
    </>
    )
}

export default SettingsScreen