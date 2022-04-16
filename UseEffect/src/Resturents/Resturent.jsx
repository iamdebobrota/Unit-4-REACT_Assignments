import React from 'react'
import data from './Data.json'
import Form from './Form';
import './Styles.css'

function Resturent() {

  // console.log(onAdd);

  let menu = data.data
  // let menu=x.FormData
  // console.log(menu.rating);



  return (
    <>
      <div className='form-div'>
        <Form />
      </div>
<select name="sort-by-rating" id="sort-rating" >
  <option value=".....">Sort By Rating </option>
  <option value="htl">Rating High To Low</option>
  <option value="lth">Rating Low to High</option>
</select>

      <div className='main'>




        {
          menu.map(item => (
            <div className='food-box'>
              <div className='overimage'>
                <img src={item.imgurl} alt="img" className='image' />
                <div className='discount-div'>
                  <p className='discount'>{`Pro extra ${item.discount}% OFF`}</p>
                  <p className='min'>30 min</p>
                </div>

              </div>
              <div className='title-rating' >
                <h3 className='title'>{item.title}</h3>
                <button className='rating'>{item.rating}
                  <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" className='star' /></button>
              </div>
              <div className='price-div'>
                <p className='catagory'>{item.category}</p>
                <p>{`₹${item.price} for one`}</p>


              </div>
              <hr className='hrline' />
              <p className='description'>{item.description}</p>
              
             <hr className='hr'/>
                  <button className='order-online' onClick='order-online'>Order Online 
                  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="bracket" className='bracket'/> </button>
              
              

            </div>
          ))
        }
      </div>
    </>
  )
}

export default Resturent;
