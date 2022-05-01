import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {

            setLoading(true)
            const res = await fetch("http://localhost:8080/Products");
            if (componentMounted) {
                setData(await res.clone().json())
                setFilter(await res.json())
                setLoading(false)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>

            </>
        )
    }

const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category===cat);
    setFilter(updatedList)
}



 const ShowProducts=()=>{
     return(
     <>
<div className="buttons d-flex justify-content-center mb-5 pb-5">
    <button className="btn btn-outline-dark  me-2" onClick={()=>setFilter(data)}>All</button>
    <button className="btn btn-outline-dark  me-2"
     onClick={()=>filterProduct("men's clothing")}>Men's clothing
     </button>
    <button className="btn btn-outline-dark  me-2" 
    onClick={()=>filterProduct("women's clothing")}>Women's Clothing
    </button>
    <button className="btn btn-outline-dark  me-2" 
     onClick={()=>filterProduct("jewelery")}>Jewelery 
     </button>
    <button className="btn btn-outline-dark  me-2" 
     onClick={()=>filterProduct("electronics")}>Electrinics
     </button>
</div>
{
    filter.map((products)=>{
        return(
            <>
    <div className="col-md-3 mb-4">
    <div className="card h-100 text-center p-4" key={products.id}>
        <img src={products.image} className="card-img-top" alt={products.title} height='240px'/>
  <div className="card-body">
    <h5 className="card-title mb-0">{products.title.substring(0,12)}...</h5>
    <p className="card-text lead fw-bold"> ₹{products.price}</p>
    <NavLink to={`/products/${products.id}`} className="btn btn-primary">Buy Now</NavLink>
  </div>
</div>
    </div>
            </>
        )
    })
}
     </>


     )
 }
    return (
        <div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
