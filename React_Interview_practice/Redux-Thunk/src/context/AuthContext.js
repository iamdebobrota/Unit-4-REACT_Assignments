import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    // const status  = JSON.parse(localStorage.getItem('authLogin'))
    // console.log(status)
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      });
      let data = await res.json();
      setToken(data.token);
      if (data.token) {
        localStorage.setItem(
          "authLogin",
          JSON.stringify({
            token: data.token,
            status: true,
          })
        );
      }
      console.log(data.token);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    console.log("out")
    setToken(null);
    localStorage.removeItem("authLogin");
    navigate("/login")
  };

  let value = { token, handleLogin, handleLogout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
