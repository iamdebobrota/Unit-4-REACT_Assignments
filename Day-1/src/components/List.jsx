
import React from "react";
//component => function => take any propeies as arguments

const List1 =() =>{
    // console.log(props)
    return(
     <>   
<h1>Mobile Operating System</h1> 
<ul>
 
      <li>
         Andriod 
      </li>
      <li>
          Blackbary
      </li>
      <li>iPhone</li>
      <li>Windows Phone</li>
  </ul>
  </>
    )
}

export const List2 =()=>{
    return(
        <> 
  <h1>Mobile Manufacturers</h1>
 <ul>
   
<li>Samsung</li>
<li>HTC</li>
<li>Micromax</li>
<li>Apple</li>
</ul>
</> 
    ) 
}

export default List1;

//name export
//default export