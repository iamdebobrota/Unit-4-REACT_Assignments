import './styles.css';
import React from 'react';
import './App.css';

import Employ from './Employ';
import Todo from './Todo';
///increament and decreament value button


function App() {

//destructuring
//React.useState => [value,setValue]

  return (
    <div className="App">
      <h1 className='header'>Students form</h1>
      
 <div className='flex'>
 <Employ/>
     <Todo/>
 </div>
   
    </div>
  );
}

export default App;
