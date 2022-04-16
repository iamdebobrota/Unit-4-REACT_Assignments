import React from 'react'
import Todos from './Todos'
let todos =[

    { id: 1, value: "react", completed : false},

];

function Main() {
  return (
    <div>
      <Todos todos={todos}/>
      {/* {true ? <div> A </div> : <div> B </div> } */}
    </div>
  )
}

export default Main;
