import axios from "axios";
import {
  ERR_DATA,
  FILTER_DATA,
  GET_DATA,
  REQ_DATA,
  SORT_DATA,
} from "./actionTypes";

function getProductsData(dispatch) {
  dispatch(req_data());
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) =>
      dispatch({
        type: GET_DATA,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(error_data(err.message)));
}

export const req_data = () => ({
  type: REQ_DATA,
});

export const error_data = (err) => ({
  type: ERR_DATA,
  payload: err,
});

const sortProducts = (payload) => ({
  type: SORT_DATA,
  payload,
});

const filterProducts = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export { getProductsData, sortProducts, filterProducts };