import React from "react";
import { Provider } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import IndividualItem from "./IndividualItem";
import { store } from "../Redux/Store";


const MainRoutes = () => {
  return (
    <div>
      <Provider store={store}>
        <nav>
          <NavLink to={"/"}>TODO APP</NavLink>
          <NavLink to={"/"}>Tasks</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/todo/:id" element={<IndividualItem />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default MainRoutes