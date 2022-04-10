import React from 'react';
import './Style.css'

function TodoList( {title, id, status,handleDelete,isHidden}) {
   const handleDeletefn=()=>{
       handleDelete(id);
    }

    
  return (
    <div className='content'>
      
       <button onClick={handleDeletefn} ><img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" /></button>
       <h3> {title} </h3>
    </div>
  )
}

export default TodoList;

// () =>{handleDelete(id)}