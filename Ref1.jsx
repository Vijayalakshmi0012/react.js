import React, { useRef, useState } from 'react'
import Img from"./picture.webp"

const Ref1 = () => {
    let[photo,setPhoto]=useState(Img)
    let[loading,setLoading]=useState(true)
    let ImgRef=useRef()
    let handleChange=()=>{
        if(loading===true){
            setLoading(!true)
            ImgRef.current.style.borderRadius="25%"
            ImgRef.current.style.border="2px solid blue"
        }
      
        else {
        setLoading(!false)
        ImgRef.current.style.borderRadius="0"
        ImgRef.current.style.border="none"
    }
  }
    
  return (
    <div>
        <img src={photo} alt="spiderman" ref={ImgRef}height="200px"width="200px" />
        <button onClick={handleChange}>{loading?"on":"off"}</button>
    </div>
    
  )
  }


export default Ref1