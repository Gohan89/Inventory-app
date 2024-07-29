import React, { createContext, useState, useContext } from 'react';
import { login, register } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginUser = async (username, password) => {
        const userData = await login(username, password);
        setUser(userData);
    };

    const registerUser = async (username, password) => {
        await register(username, password);
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

