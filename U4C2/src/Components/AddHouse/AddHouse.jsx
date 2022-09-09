import React from 'react';
export const AddHouse = () => {
  const [formdata,setformdata] = React.useState({});
  const handleChange = (e)=>{
    let inputName = e.target.name;

    if(e.target.type==='checkbox'){
      setformdata({...formdata,[inputName]:e.target.checked})     
    }
    else{
      setformdata({...formdata,[inputName]:e.target.value})
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    sendata(formdata)
  }
  const sendata = (formdata)=>{
    fetch(`http://localhost:8080/houses`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdata)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit} >
        <label>name</label>
        <input type="text" onChange={handleChange} className="name" name="name" required />
        <br />
        <label>ownerName</label>
        <input  type="text" onChange={handleChange} className="ownerName" name="ownerName" required />
        <br />
        <label>address</label>
        <input  type="text" onChange={handleChange} className="address" name="address" required />
        <br />
        <label>areaCode</label>
        <input  type="text" onChange={handleChange} className="areaCode" name="areaCode" required />
        <br />
        <label>rent</label>
        <input  type="text" onChange={handleChange} className="rent" name="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={handleChange}  type="checkbox" name="bachelor" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={handleChange}  type="checkbox" name="married" className="married" />
        <br />
        <label>image</label>
        <input onChange={handleChange}  type="text" className="image" name="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
