import React from 'react'
import Card from './Card'

const data={
    name:"Debu",
    qualification: "Graduate",
    organization:"Masai",
    gender: "Male",
    imgURL:"https://media-exp1.licdn.com/dms/image/C5603AQEITfCVWZ_D8A/profile-displayphoto-shrink_400_400/0/1646069697962?e=1654732800&v=beta&t=zHK05pDnOx8SzBKcQ3PvHRFq5T_7eZvQG0h1kAhLouM"
    
}

function Employ (){
    return (
        <>
        
        <Card {...data}/>
        </>
    )
}
export default Employ;
