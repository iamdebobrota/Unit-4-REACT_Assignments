import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import { CategoryCard } from "../components/CategoryCard";
import Home from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:cat" element={<CategoryCard />} />
      </Routes>
    </>
  );
};
export { MainRoutes };