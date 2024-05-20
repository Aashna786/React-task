import { useState } from "react"

export const Controlled=()=>{
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
    })

   const onchangeHander=(e)=>{
       const {name,value}=e.target

       setData(prevState=>{
        return {...prevState,[name]:value}
       })

       console.log(name, value)
   }

    return(
        <>
        <form>
            <input type="text" value={data.name} name="name" onChange={onchangeHander}/>
            <input type="email" value={data.email} name="email" onChange={onchangeHander}/>
            <input type="password" value={data.password} name="password" onChange={onchangeHander}/>
            <input type="submit"/>
        </form>
        </>
    )
}