import React from 'react'
import Apple from './Apple'
import Card from './Card'

const data={
  date: "28/07/2022",
  btn:"Case Study",
  heading:"Amazon Gift Pay",
  para:"Desktop - Mobile",
  imgUrl:"https://icones.pro/wp-content/uploads/2021/08/icone-amazon-noir.png"

}

const data2={
  date: "17 Sept 2022",
  btn:"Case Study",
  heading:"Apple Gift Payment",
  para:"MacOS - Mobile",
  imgUrl:"https://w7.pngwing.com/pngs/589/546/png-transparent-apple-logo-new-york-city-brand-computer-apple-company-computer-logo.png"

}

function Employ() {

  return (
    <div>
    <Card {...data} />
    <Apple {...data2}/>
    </div>
  )
}

export default Employ;
