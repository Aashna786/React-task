import { useState } from "react"

const Registration=()=>{

const[data,setData]=useState({
    username:"",
    email:"",
    password:"",
    phoneno:""
})

 const onchangeHandler=(e)=>{
const {username,email,password,phoneno}=e.target

setData((prevstate)=>{
    return {...prevstate,[name]:value}
})

console.log(name,value)
}

        return(
<>

<form>

<input type="text" value={data.username} name="username" onChange={onchangeHandler}></input>
<input type="email" value={data.email} name="email" onChange={onchangeHandler}></input>
<input type="pwd" value={data.password} name="password" onChange={onchangeHandler}></input>
<input type="tel" value={data.phoneno} name="phoneno" onChange={onchangeHandler}></input>


</form>

</>
        )
    }

    export default Registration