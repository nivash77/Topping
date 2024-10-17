import React, { useState } from "react";
import { addUser } from '../service/api'; 
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate(); 
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleAddUser = async (e) => {
        e.preventDefault(); 
        try {
            const response = await addUser(userDetails);
            if (response.status === 201) {
                toast.success("User added successfully!");
                setUserDetails({ username: "", email: "", password: "" }); 
                navigate('/login'); 
            }
        } catch (error) {
            console.error("Error adding user:", error.response ? error.response.data : error.message);
            toast.error("Failed to add user. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="w-[350px] h-[500px] flex flex-col justify-center items-center bg-[#EDDCD9] border-2 border-[#264143] rounded-2xl shadow-[3px_4px_0px_1px_#E99F4C] p-6">
                <p className="text-[#264143] font-bold text-2xl mt-5">SIGN UP</p>
                <form onSubmit={handleAddUser}>
                    <div className="flex flex-col items-baseline m-2">
                        <label className="font-semibold mb-1" htmlFor="username">Name</label>
                        <input
                            placeholder="Enter your full name"
                            name="username"
                            onChange={handleChange}
                            value={userDetails.username}
                            className="outline-none border-2 border-[#264143] shadow-[3px_4px_0px_1px_#E99F4C] w-[290px] p-3 rounded-md text-base"
                            type="text"
                            required
                        />
                    </div>
                    <div className="flex flex-col items-baseline m-2">
                        <label className="font-semibold mb-1" htmlFor="email">Email</label>
                        <input
                            placeholder="Enter your email"
                            name="email"
                            onChange={handleChange}
                            value={userDetails.email}
                            className="outline-none border-2 border-[#264143] shadow-[3px_4px_0px_1px_#E99F4C] w-[290px] p-3 rounded-md text-base"
                            type="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col items-baseline m-2">
                        <label className="font-semibold mb-1" htmlFor="password">Password</label>
                        <input
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleChange}
                            value={userDetails.password}
                            className="outline-none border-2 border-[#264143] shadow-[3px_4px_0px_1px_#E99F4C] w-[290px] p-3 rounded-md text-base"
                            type="password"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-[#DE5499] text-white font-extrabold rounded-lg shadow-[3px_3px_0px_0px_#E99F4C] w-[290px] py-4 my-6 hover:opacity-90">
                            SIGN UP
                        </button>
                        <p>Have an Account? <a className="font-extrabold text-[#264143] p-1" href="/login">Login Here!</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};