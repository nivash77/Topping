import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
const PaymentProcessing = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const nav=useNavigate()
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
            let calculatedTotal = 0;
            storedCart.forEach(item => {
                calculatedTotal += item.price * item.quantity;
            });
            setTotal(calculatedTotal);
        }
    }, []);
    const handleneg=()=>{
        nav('/home');
    }
    return (
        <div className="container mx-auto mt-5 p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Checkout Summary</h2>
            <div id="cart-summary">
                {cart.length > 0 ? (
                    <>
                        <div className="mb-4">
                            {cart.map((item, index) => (
                                <div key={index} className="flex justify-between border-b py-2">
                                    <span className="text-lg">{item.name}</span>
                                    <span className="text-lg">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <h5 className="text-xl font-semibold mt-2">Total: ₹{total.toFixed(2)}</h5>
                    </>
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300" onClick={handleneg}>
                Proceed to Payment
            </button>
        </div>
    );
};

export default PaymentProcessing;