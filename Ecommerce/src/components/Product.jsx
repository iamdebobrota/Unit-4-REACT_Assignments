import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'
import { NavLink, useParams } from 'react-router-dom'

function Product() {
    const {id} = useParams()
     const [loading, setLoading] = useState(false)
    const [product,setProduct]= useState([])

    const dispatch = useDispatch()
    const addProduct=(product)=>{
        dispatch(addToCart(product));
    }

    useEffect(() => {
     const getproduct= async()=>{
         setLoading(true);
         const responce= await fetch(`http://localhost:8080/Products/${id}`);
         setProduct(await responce.json());
         setLoading(false)
     }
     getproduct();
    }, [])
    
    const Loading=()=>{
        return (
            <>
        <div className="col-md-6">
            <Skeleton height={400}/>
        </div>
        <div className="col-md-6" style={{lineheight:2}}>
            <Skeleton height={50} width={300}/>
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150}  />
            <Skeleton height={50} width={100} />
            <Skeleton height={50}  width={100} style={{marginLeft:6}}/>
        </div>
            </>
        )
    }

const ShowProducts=()=>{
    return (
        <>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} 
            height="400px" width="400px"/>
        </div>
        <div className="col-md-6">
            <h4 className='text-uppercase text-black-50'>
                {product.category}
            </h4>
            <h1 className='display-5'> {product.title}</h1>
            <p className='lead fw-bolder'>
                Rating {product.rating && product.rating.rate}
                <i className='fa fa-star'></i>
            </p>
<h3 className="display-6 fw-bold my-4">
₹ {product.price}
</h3>
<h3 className="lead">{product.description}</h3>

<button className='btn btn-primary px-4 py-2' onClick={()=>addProduct(product)}

>Add to Cart</button>
<NavLink to="/cart" className='btn btn-outline-dark ms-2 px-3'>Go to Cart</NavLink>
        </div>
        </>
    )
}

  return (
    <div>
        
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Product