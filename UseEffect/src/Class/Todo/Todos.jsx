import React,{useState,useEffect} from 'react'
import AddTodo from './AddTodo'
import Todo from "./Todo"
import './style.css'

function Todos() {
    const [todos,setTodos]=useState([])
    const [pageNum,setPageNum]=useState(1)
 
    const onAdd=(newTodo)=>{
//POST
  //rest operator
        setTodos([...todos, newTodo ]);
    };
    const onDelete = id =>{
      const newTodos =todos.filter((todo)=> todo.id !==id);
            setTodos(newTodos)
    }
    const onEdit = (updatedTodo) =>{
      const newTodos =todos.map((todo)=>{
        if(todo.id===updatedTodo.id) return updatedTodo;
        else return todo;
      });
            setTodos(newTodos)
    }

      useEffect(()=>{

  const getTodos = async ()=>{
    try{
      let res=await fetch(`http://localhost:3000/todos?_page=${pageNum}`)
      let data =await res.json()
      // console.log(data)
      setTodos(data)
    } catch(err){
      console.log(err)
    }
    };
  getTodos()
 },[pageNum])


  return (
    <div>
    <h1 className='heading'>Todo List</h1>
    <p className='pg-num'>Page No. : {pageNum}</p>
      <AddTodo onAdd={onAdd}/>
{todos.map((todo) => (
<Todo key ={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
))}

<button onClick={()=>{
  if(pageNum >1){
    setPageNum(pageNum-1)}
}

  } className="prev">Previous</button>
<button className="prev" onClick={()=> setPageNum(pageNum+1)}>Next</button>

    </div>
  )
}

export default Todos;
