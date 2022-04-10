import React from 'react'
import { v4 as uuid} from 'uuid'
import TodoList from './TodoList'
import './Style.css';


function Todo() {
const [query, setQuery]=React.useState("")
const [Todo, setTodo]=React.useState([])

const handleAdd =()=>{
const payload={
    title: query,
    status:false,
    id: uuid()
}
setTodo([...Todo, payload])
}
const handleDelete=(id)=>{
    let updatedTodo=Todo.filter((item)=> item.id!==id)
    setTodo(updatedTodo)
}

  return (
      <div className='main'>
      <h3 className='heading'>Todo List</h3>
        <div className='inp-main'>
        <input value={query} className='input-box' onChange={(e)=> setQuery(e.target.value)} 
        type ="text" placeholder='write something'/>
        <button onClick={handleAdd} className='add-btn'>+</button>
        </div>

    <h5 className='count'>
        {Todo.length >0 && `Todo List( ${Todo.length} )`}
    </h5>

        <div>
            {
            Todo.map((item, index)=>{
                return <TodoList 
                 handleDelete={handleDelete}
                  index={item.id} key ={item.id}
                   {...item}/>;
                //isHidden={index%2==0} This is for hiden function it should use in this TodoList.
            })}
        </div>

      </div>
  
  );
}

export default Todo;