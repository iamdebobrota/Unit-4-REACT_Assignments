import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div classNameName='hero'>
        <div className="card bg-dark text-white border-0">
  <img src="/assets/bg.jpg" className="card-img" alt="background" height='550px'/>
  <div className="card-img-overlay d-flex  justify-content-center flex-column text-center">
      <div className="continer">

    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2">
        CHECK OUT ALL THE TRENDS
    </p>
  
      </div>
  </div>
</div>
      
      <Products/>
    </div>
  )
}

export default Home
