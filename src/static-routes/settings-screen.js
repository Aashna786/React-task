import React from "react"
import NavBar from "./navbar"
import { useDispatch, useSelector } from "react-redux"
import { buyBookFunction, returnBookFunction } from "../redux/actions"
import { profileUpdate } from "../redux/profile/action"

const SettingsScreen=()=>{
const dispatch=useDispatch()
const {books:{bookCount},profile:{profile}}=useSelector(state=>state);
// console.log("reduxState: ",reduxState)

const bookBuy=()=>{
dispatch(buyBookFunction())
}

const bookReturn=()=>{
    dispatch(returnBookFunction())
    }


const updateProfile=()=>{
    dispatch(profileUpdate(
        {
            name:"Ram",
            email:"ram@gmail.com",
            mobile:896523
        }
    ))
}    

    return(
        <>
       <NavBar></NavBar> 
       <button onClick={bookBuy}>BUY BOOK</button>
       <button onClick={bookReturn}>RETURN BOOK</button>
       <h2>Book count in Library {bookCount}</h2>
       <h2>Profile Info</h2>
       <h3>{profile.name}</h3>
       <h3>{profile.email}</h3>
       <h3>{profile.mobile}</h3>


       <button onClick={updateProfile}>Update Profile Details</button>
    </>
    )
}

export default SettingsScreen