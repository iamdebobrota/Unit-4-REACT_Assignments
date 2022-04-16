import { useState } from 'react';

import Counter from './Counter'; 

// import Employ from './sprint-1/day-3/assignments/PaymentCard/Employ';
// import Todo from './sprint-1/day-3/assignments/Todo/Todo';






function ShowHide() {
  const [showCounter, setShowCounter]=useState(true)
  return (
    <div className="ShowHide">
      <button onClick={()=>setShowCounter(!showCounter)}>
        {showCounter ? "HIDE" : "SHOW"}
      </button>
{showCounter && <Counter/>}
    </div>
  );
}

export default ShowHide;