import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    
<nav style={{ backgroundColor: "#8000ff", padding: 20,
fontSize:"25px",
display:"flex",gap:"30px", justifyContent:"center",
color:"white", fontWeight:"600"
}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <NavLink to={"/"} style={{color:"white", textDecoration:"none"}}>Home</NavLink>
      <NavLink to={"/about"} style={{color:"white", textDecoration:"none"}}>About</NavLink>
      <NavLink to={"/products"} style={{color:"white", textDecoration:"none"}}>Products</NavLink>
      <NavLink to={"/products/men"} style={{color:"white", textDecoration:"none"}}>Men</NavLink>
      <NavLink to={"/products/women"} style={{color:"white", textDecoration:"none"}}>Women</NavLink>
      <NavLink to={"/products/kids"} style={{color:"white", textDecoration:"none"}}>Kids</NavLink>
      <NavLink to={"/products/homedecor"} style={{color:"white", textDecoration:"none"}}>Home Decor</NavLink>
    </nav>
  );
};



// <nav style={{ backgroundColor: "#8000ff", padding: 20,
// fontSize:"25px",
// display:"flex",gap:"30px", justifyContent:"center",
// color:"white", fontWeight:"600"
// }}>