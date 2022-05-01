import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {



    
    const handleSubmit = (e)=>{
        e.preventDefault();
 
    }
    useEffect(()=>{
      
           
        
    },[])


  return (
    <div>
         <div className="container" style={{width:"480px",marginTop:"60px",marginBottom:"120px"}}>
     <form className="form-control form-control-sm px-5 py-5">
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3" data-dismiss="modal">Sign in</button>
</form>
    </div>


    </div>
  )
}

export default Login