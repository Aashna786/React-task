import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"


const UseEffect1 =()=>{

const[todos,setTodos]=useState([]) 
const[count,setCount]=useState(0) 
const[eachTodo,setEachTodo]=useState({}) 


//useEffect will trigger once (fetch data from server)
    useEffect(()=>{
        fetchData()
    },[])


//useEffcet will trigger everytime when array value changes
    useEffect(()=>{
   document.title=`count ${count}`
   fetchEachTodo()
       },[count])

//to fetch all the todo's from server
    const fetchData=async()=>{
    const result=await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log('result: ',result);
    if(result.status===200)
setTodos(result.data)
    }

//this function is to fetch todo based on the current count
const fetchEachTodo=async()=>{
    const result=await axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`)
    console.log('result: ',result);
    if(result.status===200)
   setEachTodo(result.data)
}


const handleIncrement=()=>{
setCount(count+1)

}


//this function checks whether object is empty or not
const checkObjectEmpty=(obj)=>{
 return Object.keys(obj).length>0
}

    return(
<>
<h2>Use Effect Example</h2>

{

checkObjectEmpty(eachTodo)?<>
<h3>{eachTodo.title}</h3>
</>
:
<h3>No Data</h3>


}



<h3>{count}</h3>
<button onClick={handleIncrement}>Count Increment</button>

{
    todos.length>0?
    <>
{
todos.map((eachTodo)=>{
    return(
        <React.Fragment key={eachTodo.id}>
        <h3>{eachTodo.title}</h3>
        </React.Fragment>
    )
})
}
    </>
    :
    null
}

</>



    )
}

export default UseEffect1