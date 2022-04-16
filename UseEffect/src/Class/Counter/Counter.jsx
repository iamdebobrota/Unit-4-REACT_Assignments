import React,{useEffect, useState} from 'react'

function COunter() {
const [count, setCount]=useState(0)
const [count1, setCount1]=useState(0)


const decrement=()=>{
    setCount(count-1)
}

// useEffect(()=>{
//     console.log('Mounted are rendered')
//     return()=>{
//         console.log("UnMounted")
//     }
   
// })

//only when components is mounted
// useEffect(()=>{
//     console.log('Mounted are rendered []')
//     return()=>{
//         console.log("UnMounted []")
//     }
// }, [])

//initialy when components
// is mounted and is count 1 or count2 changes value
useEffect(()=>{
    console.log('Count 1 is Change')
    if(count>7){
        setCount(100)
    }
    return()=>{
        console.log("UnMounted []")
    }
}, [count])
//initially when components is mounted , and if count chnges value
useEffect(()=>{
    console.log('Count 1 is Change')
    if(count>7){
        setCount(100)
    }
    return()=>{
        console.log("UnMounted []")
    }
}, [count, count1])

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={()=>{(setCount(count+1))}}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      
    </div>
  )
}

export default COunter
