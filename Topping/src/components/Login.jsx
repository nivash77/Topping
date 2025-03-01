import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getUser } from '../service/api';
import { useUser } from './UserContext';
export const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();
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
              const response = await getUser(username); // Call the API
          
              //alert(response.data)
              if (response.status === 200) {
                const user = response.data.user; // Extract user data
               // console.log("Fetched User:", user);
                // Check if user exists and has the correct password
                //console.log(user.password)
                if (user.username === username) {
                  if (user.password === password) {
                    handleSuccess("Login successful!");
                  // alert("Login successful!")
                  setUser(username)
                  localStorage.setItem("user", JSON.stringify({ username: user.username }));
                  setUser({ username: user.username });
                    navigate('/home'); // Navigate to the home page
                  } else {
                    toast.error("Incorrect password. Please try again.", {
                      position: "bottom-left",
                    });
                  }
                } else {
                  toast.error("User not found. Please check your username.", {
                    position: "bottom-left",
                  });
                }
              }
            } catch (error) {
              console.error("Login error:", error.response ? error.response.data : error.message);
              if (error.response) {
                // Server responded with an error
                if (error.response.status === 404) {
                  toast.error("User not found. Please check your username.", {
                    position: "bottom-left",
                  });
                } else if (error.response.status === 500) {
                  toast.error("Internal server error. Please try again later.", {
                    position: "bottom-left",
                  });
                } else {
                  toast.error("An unexpected error occurred. Please try again.", {
                    position: "bottom-left",
                  });
                }
              } else if (error.request) {
             
                toast.error("No response from server. Please check your network connection.", {
                  position: "bottom-left",
                });
              } else {
                toast.error(`Error: ${error.message}`, {
                  position: "bottom-left",
                });
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
