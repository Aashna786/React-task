import { useState } from "react"

const Counter=()=>{
const initialvalue=1

const[count,setCount]=useState(initialvalue)

const stateHandler=(action)=>{

// updater function can have 2 ways

// 1.direct current state
// 2.I will pass a function


// 1st method
    // setCount(count+1)


// 2nd method 
    // setCount(value=>value+1)
    // setCount(value=>value+1)

// it increases the value two times

switch(action)
{
    case "INCREMENT":
        setCount(count+1)
        break

        case "DECREMENT":
    
            setCount(count-1)    
            break

            case "RESET":
                setCount(0)
                break

                default:
                    break
}

}


    return(
        <>

        <h3>Counter example in functional based components</h3>
        <h3>{count}</h3>


 
        <button onClick={()=>stateHandler("INCREMENT")}>Increment counter</button>
        <button onClick={()=>stateHandler("DECREMENT")}>Decrement counter</button>
        <button onClick={()=>stateHandler("RESET")}>Reset counter</button>




        </>
    )
}

export default Counter