import React,{useState} from 'react';
import './style.css'


function AddTodo({onAdd}) {
    const [newTodo, setNewTodo]=useState("")

    const postTodo= async(value)=>{
      let res= await fetch("http://localhost:3000/Todos/",{
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({
          value,
          completed: false,
        }),
      });
      let data = await res.json();
      onAdd(data)
      
      console.log(data);
    };
  
  return (
    <div>
      <input type="text" 
      placeholder='Enter your tod here '
      value={newTodo}
       onChange={(e)=>setNewTodo(e.target.value)} className='todo-input'/> 

      <button onClick={()=>{
          let value= newTodo.trim()
          if(value){
           
            postTodo(value);
             setNewTodo("")
          }
      }} className='add-btn'> ADD </button>
    </div>
  )
}

export default AddTodo
