import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../App.css'


const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light py-3 shadow-sm">
  <div className="container ">
    <NavLink className="navbar-brand fw-bold fs-4" to="/">Debu Mart</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
       
     
      </ul>
     <div className="buttons">
         <NavLink to="/login" className="btn btn-outline-dark">
             <i className='fa fa-sign-in me-1'> Login</i>
            </NavLink>
         <NavLink to="/regiter" className="btn btn-outline-dark ms-2">
             <i className='fa fa-user-plus me-1'> Rgister</i>
            </NavLink>
         <NavLink to="/cart" className="btn btn-outline-dark ms-2">
             <i className='fa fa-shopping-cart me-1'> Cart(
               {!state}0)</i>
            </NavLink>
     </div>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
