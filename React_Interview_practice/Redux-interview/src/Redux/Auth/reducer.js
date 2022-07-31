import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const token = JSON.parse(localStorage.getItem("token")) || "";

const initState = {
  inAuth: token ? true : false,
  token: token,
  isError: false,
  isLoading: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        inAuth: false,
        isError: false,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        inAuth: true,
        token: payload,
        isError: false,
        isLoading: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        inAuth: false,
        token: "",
        isError: false,
        isLoading: true,
      };

    default:
      return state;
  }
};
