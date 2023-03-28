import React from 'react'
import{Link}from'react-router-dom';


const Nav = () => {
  return (
   
    <div style={{display:"flex",justifyContent:'space-between',alignItems:"center",color:"blue"}}>
         <div>Logo</div>
         <div>
        <ol style={{display:'flex',justifyContent:'space-Evenly',width:"400px"}}>
            <ul>
                <Link to="/">Home</Link>
                </ul>
            <ul>
                <Link to="/login">Login</Link>
                </ul>
            <ul>
                <Link to="/signup">Signup</Link>
                </ul>
            <ul>
                <Link to="/about">About</Link>
                </ul>
            <ul>
                <Link to="* ">PagenotFound</Link>
                </ul>

        </ol>
        </div>
    </div>
  )
}

export default Nav