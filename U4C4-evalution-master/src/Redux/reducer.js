import {
  ERR_DATA,
  FILTER_DATA,
  GET_DATA,
  REQ_DATA,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQ_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        filterData: [],
        products: [],
      };
    case ERR_DATA:
      return {
        ...state,
        isLoading: false,
        isError: true,
        filterData: [],
        products: [],
      };
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: payload,
      };
    case SORT_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: state.products.sort((a, b) => {
          if (payload === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        }),
      };
    case FILTER_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: state.products.filter((item) => {
          return item.category === payload;
        }),
      };
    default:
      return state;
  }
};
export { reducer };