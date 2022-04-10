// import {useState} from 'react'
import React ,{useState} from 'react'
import './styles.css'

 function Todo() {
     const [task,setTask]=React.useState("")
     const [todo,setTodo]=useState([])
     const handleChange=(e) =>{
        setTask(e.target.value)

     }
     const handleClick=()=>{
         setTodo([...todo, task])
     }
  return (
    <>
    <div className='todo'>
    <h1>Todo List</h1>
    <input type={"text"} value={task}  className="all input" onChange={handleChange} placeholder='Enter todo here..' />
    <button onClick={handleClick} className="all"> + </button>
    {todo.map((item)=>{
        return <h3 className='viewItem'>{item}</h3>

    })}
    </div>
    </>
  )
}




export default Todo;
