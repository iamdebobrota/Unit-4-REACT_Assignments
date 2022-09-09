import {useState} from 'react'
import {useRef} from 'react'
import React from 'react'


function Counter() {
    const [count,setCount]=useState(0)
    const refX=useRef(10) //current is 10

    console.log("value of x: ", refX.current);
  return (
    <div>
        <h1>Counter: {count}</h1>
        <div>
            <button onClick={()=>{
                setCount(count+1)
                refX.current = refX.current+1 ;
                console.log("new x:", refX.current);
            }}>Increment</button>
            <button onClick={()=>{
                setCount(count-1)
                refX.current=(refX.current+1)        
            }}>Do Nothing</button>
        </div>
      
    </div>
  )
}

export default Counter;
