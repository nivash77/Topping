import React, { useState, useEffect } from 'react';
import IngredientCard from './Ingredients'; 
import Cart from './Cart';
import { getorderProduct } from '../service/api';
const CartIndex = () => {
    const [cart, setCart] = useState([]);
    const [ingredients, setIngredients] = useState([]); 
    const exchangeRate = 83;

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await getorderProduct(); 
                setIngredients(response.data.products); 
            } catch (error) {
                console.error("Error fetching ingredients:", error);
            }
        };

        fetchIngredients();
    }, []);

    const addToCart = (name, price) => {
        const priceINR = price * exchangeRate;
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            setCart(cart.map(item =>
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { name, price: priceINR, quantity: 1 }]);
        }
    };

    const removeItem = index => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const checkout = () => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = '/checkout'; 
        } else {
            alert('Your cart is empty!');
        }
    };

    return (
        <div className="container mx-auto mt-4 flex justify-between flex-wrap">
            <div className="ingredients-section">
                <h2 className="text-center text-2xl font-semibold mb-4">Available Ingredients</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ingredients.map((ingredient, index) => (
                        <IngredientCard
                            key={index}
                            name={ingredient.name}
                            price={ingredient.price}
                            imgSrc={ingredient.imgSrc}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>

            <Cart cart={cart} removeItem={removeItem} totalPrice={getTotalPrice()} checkout={checkout} />
        </div>
    );
};

export default CartIndex;