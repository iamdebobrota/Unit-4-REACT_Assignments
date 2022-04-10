import React from 'react'

function TodoItem( title, id, status,handleDelete,isHidden) {
    const handleDeletefn=()=>{
        handleDelete(id);
     }
 

  return (
    <div>
      <h3> {title} </h3>
       <button onClick={handleDeletefn}>Delete</button>
    </div>
  )
}

export default TodoItem;
