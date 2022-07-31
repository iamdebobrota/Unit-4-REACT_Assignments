import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from "./actionType";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  payload: err,
});

// Middleware
export const loginUser = (payload) => (dispatch) => {
  dispatch(loginRequest());
  const { email, password } = payload;

  axios
    .post("https://reqres.in/api/login", {
      email,
      password,
    })
    .then((res) => dispatch(loginSuccess(res.data.token)))
    .catch((err) => dispatch(loginFailure(err.message)));
};
