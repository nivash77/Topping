import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user from localStorage or backend
        const storedUser = localStorage.getItem("user");

        try {
            const parsedUser = JSON.parse(storedUser);

            if (parsedUser && typeof parsedUser === "string") {
                // Convert stored string into an object
                setUser({ username: parsedUser });
            } else if (parsedUser && typeof parsedUser === "object") {
                setUser(parsedUser);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            setUser(null);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
