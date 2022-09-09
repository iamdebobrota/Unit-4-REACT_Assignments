import "./Rentals.css";
import React from 'react';

export const Rentals = () => {
  const [rentals,setrentals] = React.useState([])
  
  React.useEffect(()=>{
    fetch(`http://localhost:8080/houses`)
    .then((res)=>res.json())
    .then((data)=>setrentals(data))
    .catch((err)=>console.log(err))
  },[])
  const lowtohigh = ()=>{
      rentals.sort((a,b)=>{
        return a.rent-b.rent
      })
      
      setrentals([...rentals])
  }
  const hightolow = ()=>{
      rentals.sort((a,b)=>{
        return b.rent-a.rent
      })
      
      setrentals([...rentals])
  }
  const idsort = ()=>{
      rentals.sort((a,b)=>{
        return a.id-b.id
      })
      
      setrentals([...rentals])
  }
  const arealth = ()=>{
      rentals.sort((a,b)=>{
        return a.areaCode-b.areaCode
      })
      
      setrentals([...rentals])
  }
  const areahtl = ()=>{
      rentals.sort((a,b)=>{
        return b.areaCode-a.areaCode
      })
      
      setrentals([...rentals])
  }
  const addressSearch = (e)=>{
    if(e.target.value===""){
      fetch(`http://localhost:8080/houses`)
    .then((res)=>res.json())
    .then((data)=>setrentals(data))
    .catch((err)=>console.log(err))
    }
    else{
      const newrental = rentals.filter((item)=>item.address.includes(e.target.value));
    setrentals([...newrental])
    }
    
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={idsort} className="sortById">Sort by ID</button>
        <button onClick={lowtohigh} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={hightolow} className="sortByRentDesc">Rent High to low</button>
        <button onClick={arealth} className="sortByAreaAsc">Area Low to high</button>
        <button onClick={areahtl} className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={addressSearch}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.bachelor && house.married?"both": house.bachelor? "bachleor" : "married"}
                </td>
                <td className="houseImage">
                  <img style={{height:"100px",width:"100px"}} src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
