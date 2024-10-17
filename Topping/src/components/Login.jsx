import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getUser } from '../service/api';

export const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
    });
    const { username, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await getUser(username); 
           alert( response.data); 
            if (response.status === 200) {
                const user = response.data;
                console.log("Fetched User:", user);
                alert(inputValue.username)
                if (user.username===inputValue.username) {
                    handleSuccess("Login successful!");
                    navigate('/home');
                }
                    if (!user.password ) {
                        alert("Password field is missing in user data.");
                        return;
                    }
                 else {
                    handleError("Incorrect password. Please try again.");
                }
            }
        } catch (error) {
            console.error("Login error:", error.response ? error.response.data : error.message);
            
            // Display a user-friendly message based on the error
               // Display a user-friendly message based on the error
        if (error.response) {
            // Server responded with a status other than 2xx
            if (error.response.status === 404) {
                alert("User not found. Please check your email.");
            } else if (error.response.status === 500) {
                alert("Internal server error. Please try again later.");
            } else {
               alert("An unexpected error occurred. Please try again.");
            }
        } else if (error.request) {
            // The request was made but no response was received
            alert("No response from server. Please check your network connection.");
        } else {
            // Something happened in setting up the request that triggered an Error
            alert("Error: " + error.message);
        }
    }

        setInputValue({
            username: "",
            password: "",
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            UserName
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                            name="username"
                            value={username}
                            placeholder="Enter your Username"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-indigo-500 hover:underline">
                            Signup
                        </Link>
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;