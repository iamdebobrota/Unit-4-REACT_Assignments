import React,{useState} from 'react'
import styles from './todo.module.css'
import './style.css'


function Todo({todo,onDelete,onEdit}) {
const [isEdited, setIsEdited] = useState(false)
const [value,setValue]=useState(todo.value)

  const deleteTodo= async ()=>{
    await fetch(`http://localhost:3000/Todos/${todo.id}`,{
      method:"DELETE",
      headers: {"content-type" : "application/json" },
    });
 onDelete(todo.id)
  }

const editTodo = async ()=>{
  let res= await fetch(`http://localhost:3000/Todos/${todo.id}`,{
      method:"PATCH",
      headers: {"content-type" : "application/json" },
    body: JSON.stringify({
      value,
      completed: true,
    })
    });
let data= await res.json();
onEdit(data)
 
  }



  return (
    <div id="flex" className={`${styles.flex}todo.completed ? styles.lineThrough : ""`}>
     {isEdited ? (
       <div>
       <input type="text" 
       placeholder='Enter your tod here '
       value={value}
        onChange={(e)=>setValue(e.target.value)}/> 
       
       <button onClick={()=>{
           let v= value.trim()
           if(v){
            
            editTodo(value);
            setIsEdited(false)
           
           }
       }}> Updated </button>
       </div>

     ): (

        <h3> {todo.value}</h3>
       
     )}
     <div>
     <button className='edit' onClick={()=>setIsEdited(!isEdited)}> EDIT </button>
        <button className='delete' onClick={deleteTodo}>Delete</button>

     </div>
     
    </div>
  )
}

export default Todo;
