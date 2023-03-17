import React from "react";
import {ToastContainer,toast}from 'react-toastify'
import'react-toastify/dist/ReactToastify.css';
const App=()=>{
  let handleSubmit=()=>{
    toast.success("logged in successfully",
    {position:toast.POSITION.TOP_CENTER
    })
  }   
  return(
    <div>
      <ToastContainer/>
      <button onClick={handleSubmit}>
        click for msg
      </button>
    </div>
  )
}
export default App