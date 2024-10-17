import React from 'react';

const Cart = ({ cart, removeItem, totalPrice, checkout }) => {
    return (
        <div className="shopping-cart bg-white shadow-lg rounded-lg p-4 ml-auto w-full max-w-sm mt-8 lg:mt-0">
        <h2 className="text-center text-2xl font-semibold mb-4">Your Cart</h2>
        <table className="table-auto w-full cart-table border-collapse">
        <thead>
        <tr>
        <th className="border px-2 py-1">Ingredient</th>
        <th className="border px-2 py-1">Quantity</th>
        <th className="border px-2 py-1">Price (₹)</th>
        <th className="border px-2 py-1">Remove</th>
        </tr>
        </thead>
        <tbody>
        {cart.map((item, index) => (
            <tr key={index}>
            <td className="border px-2 py-1">{item.name}</td>
            <td className="border px-2 py-1">{item.quantity} kg</td>
            <td className="border px-2 py-1">₹{(item.price * item.quantity).toFixed(2)}</td>
            <td className="border px-2 py-1">
            <button
            className="bg-red-500 text-white py-1 px-2 rounded"
            onClick={() => removeItem(index)}
            >
            Remove
            </button>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        <div className="text-right mt-4">
        <h5 className="text-lg font-bold">
        Total: ₹<span id="total-price">{totalPrice.toFixed(2)}</span>
        </h5>
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-2" onClick={checkout}>
        Checkout
        </button>
        </div>
        </div>
    );
};

export default Cart;