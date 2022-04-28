import React, { useContext, useState } from 'react'
import { addCounter, DecCounter, divCounter, IncCounter, mulCounter, subCounter, reset } from '../Redux/action';
import { AppContext } from '../Redux/AppContextProvider';


function Counter() {
    const [value,setValue] = useState('')
    const {dispatch,getState} = useContext(AppContext)
    const {counter} = getState();
    const handleInc = ()=>{
        dispatch(IncCounter(1));       
    }
    const handleDec =()=>{
        dispatch(DecCounter(1));       
    }
    const handleAdd = ()=>{
        dispatch(addCounter(value))
    }
    const handleSub = ()=>{
        dispatch(subCounter(value))
    }
    const handleMul = ()=>{
        dispatch(mulCounter(value))
    }
    const handleDiv = ()=>{
        dispatch(divCounter(value))
    }
    const handlereset = ()=>{
        dispatch(reset())
    }
  return (
    <div>
        <div>
      <h1 style={{
          border:"1px solid red",
          width:"40%",
          margin:"auto",
          marginTop:"5%",
          backgroundColor:"crimson",

      }} className='value'>Value: {counter} </h1>
      </div>
      <div>
          <button onClick={handleInc} className='inc btn'>Increment</button>
          <button onClick={handleDec} className='dec btn'>Decrement</button>
      </div>
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}
       placeholder='Enter a number' className='number'/>
      <div>
          <button onClick={handleAdd} className='btn'>Add</button>
          <button onClick={handleSub}  className='btn'>Subtract</button>
          <button onClick={handleMul} className='btn'>Multiply</button>
          <button onClick={handleDiv} className='btn'>Divide</button>
      </div>
      <div>
          <button onClick={handlereset} className='btn'>RESET</button>
      </div>
    </div>
  )
}

export default Counter
