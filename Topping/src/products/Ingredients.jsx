import React from 'react';

const IngredientCard = ({ name, price, imgSrc, addToCart }) => {
    return (
        <div className="ingredient-card bg-white shadow-lg rounded-lg overflow-hidden p-2">
        <img src={imgSrc} className="w-full h-36" alt={name} />
        <div className="p-4">
        <h5 className="text-lg font-bold">{name}</h5>
        <p className="text-gray-600">Fresh organic {name}.</p>
        <div className="flex justify-between items-center mt-4">
        <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => addToCart(name, price)}
        >
        Add to Cart
        </button>
        <small className="text-gray-500">₹`{price} / kg</small>
        </div>
        </div>
        </div>
    );
};

export default IngredientCard;