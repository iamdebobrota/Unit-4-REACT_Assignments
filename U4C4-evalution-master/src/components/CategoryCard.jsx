import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  const { isLoading, isError, filterData } = useSelector((state) => state);

  const { cat } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch filter Products for every ID change
    dispatch(filterProducts(cat));
  }, [dispatch, cat]);
  return isLoading ? (
    <h1>Loading....</h1>
  ) : isError ? (
    <h1>Error.. Something went wrong</h1>
  ) : (
    <Grid data-testid="category-container">
      {/* Iterate and print product cards that are of this category */}
      {filterData.map((data) => {
        return <ProductCard key={data.id} {...data} />;
      })}
    </Grid>
  );
};