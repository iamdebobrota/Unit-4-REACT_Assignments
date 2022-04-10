import React from 'react'
import './Style.css'

function Card(props) {
    const {date,btn,heading,para,imgUrl} = props;
  return (
    <div className='main'>
      <div className='left'>
          <h4 className='date'> {date}</h4>
          <button className='btn'>{btn}</button>
          <h1>{heading}</h1>
          <h4 className='date'>{para}</h4>
      </div>
      <div>
          <img src={props.imgUrl} alt="logo" className='amazon' />
          
      </div>

    </div>
  )
}

export default Card;
