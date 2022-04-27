import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider';
 import '../Page/Style.css'
import Data from '../Data.json'



const Home = () => {
  const {logout}=useContext(AuthContext);

  return (
      <div>
    <h1>Home   </h1>
      <button onClick={logout}>Log Out</button>

{
  Data.Data.map((e)=>(
    <div key={e.id}>
      <img src={e.img} alt="a" />
      <p>{e.title}</p>
 
 </div>
  ))
}

    </div>
  )
}

export default Home
