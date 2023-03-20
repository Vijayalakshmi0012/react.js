import React, { useRef } from 'react'

const Ref = () => {
    let h1Ref=useRef()
    let handleChange=()=>{
        h1Ref.current.style.color="blue"
    }
  return (
<>
<h1 ref={h1Ref}>aryan</h1>
<button onClick={handleChange}>change</button>

</>
  )
}

export default Ref