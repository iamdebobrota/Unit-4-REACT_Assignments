
import {useState} from 'react'
import style from './Button.module.css'

function Button(){
    const [count,setCount] =useState(0)

    const handleInc=() =>{
        setCount(count+1)
    };
const handleDec=()=>{
    setCount(count-1)
}
const handleDouble = ()=>{
    setCount(count*2)
}
    
    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleInc} className={`${style.incBtn} ${style.btnall}`}>Increment + </button>
        <button onClick={handleDec} className={`${style.decBtn} ${style.btnall}`}> Decrement - </button>
        <button onClick={handleDouble} className={`${style.Double} ${style.btnall}`}>Double</button>
        </>
    )
}
export default Button;