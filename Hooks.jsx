import React, {useState} from "react"
const Hooks=()=>{
    let[username,setUsername]=useState("Aryan")
    let[count,setCount]=useState(0)
    let handlechange=()=>{
        setUsername("Apurva")
    }
    let handleCountChange=()=>{
        setCount(1)

    }
    return(
        <>
        
        <h1>{username}</h1>
        <h2>{count}</h2>
        <button onClick={handlechange}>change name</button>
        <button onClick={handleCountChange}>change number</button>
        </>
    )
}
export default Hooks