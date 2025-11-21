import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h2>

            {cart.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
                    <Link to="/products" className="text-primary hover:text-secondary font-medium">
                        Browse Products
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {cart.map((item, index) => (
                            <li key={`${item._id}-${index}`} className="p-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        src={item.image || "https://placehold.co/100x100?text=No+Image"}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-md mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total: ${total.toFixed(2)}</span>
                        <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors font-medium">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
