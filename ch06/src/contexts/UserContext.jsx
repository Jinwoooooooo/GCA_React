import React, { createContext, useState } from "react";

// Context 생성
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
