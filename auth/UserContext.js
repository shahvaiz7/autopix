import React, { useState, createContext } from "react";
const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState('')
    const [token, setToken] = useState('')
    return (
        <UserContext.Provider value={{ userData, setUserData, token, setToken }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;