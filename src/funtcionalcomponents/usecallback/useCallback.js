import { useState } from "react"
import TodosViewer from "./todos"


const UseCallbackExample=()=>{
const [todos,setTodos]=useState([])


const addTodo=()=>{
    setTodos(...todos,"newitem")
}

    return(
<>
<TodosViewer  todos={todos}/>
<h2>UseCallback Example</h2>
</>
    )
}

export default UseCallbackExample