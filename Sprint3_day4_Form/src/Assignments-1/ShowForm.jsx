 import React from 'react'
import './Styles.css'

function ShowForm(props) {
    var d=props.data;
   
   const handleShow =() =>{
    
    console.log("Data: ",d)
   }
  return (
    <div className='show'>
 <button className='submit' onClick={handleShow}>Show Your Data</button>

 <div>
     <h1 className='name-show'>{d.name}</h1>
     <h4>Age: {d.age}</h4>
     <h4>Address: {d.address}</h4>
     <h4>Department : {d.department}</h4>
     <h4>Salary :  {d.salary }</h4>
     <h4>Married : 
        {d.married? "true" : "false"}
      </h4>
 </div>
    </div>
  )
}

export default ShowForm
