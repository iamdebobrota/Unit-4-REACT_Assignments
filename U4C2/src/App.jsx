import "./App.css";
import React from 'react';
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const[show,setshow]= React.useState(false);
  return (
    <div className="App">
      <button onClick={()=>setshow(!show)} className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        {show?"Show Rentals":"Add House"}
      </button>
      {/* Show component based on state */}
      {show? (<AddHouse/>) : (<Rentals/>)}
      
      
      <br />
    </div>
  );
}

export default App;
