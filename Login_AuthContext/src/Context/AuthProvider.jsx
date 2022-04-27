import React,{createContext, useState} from "react";

export const AuthContext =createContext();

export const AuthProvider=({children})=>{

    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const login =()=>{
        //login Api call
        setIsLoggedIn(true)
    }
    const logout=()=>{
        //logout api call
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{isLoggedIn, login,logout}}>
        {children}
        </AuthContext.Provider>
}

