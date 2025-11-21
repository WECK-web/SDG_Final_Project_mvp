import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        cartTotal,
    } = useCart();
    const { addToast } = useToast();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const handleCheckout = () => {
        if (cart.length === 0) return;
        setIsCheckoutOpen(true);
        setIsCartOpen(false);
    };

    if (!isCartOpen && !isCheckoutOpen) return null;

    return (
        <>
            {isCartOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsCartOpen(false)}
                    ></div>

                    <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
                        <div className="h-full w-full bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out">

                            {/* Header */}
                            <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                                <div className="flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-emerald-600" />
                                    <h2 className="text-lg font-bold text-stone-800">Your Cart</h2>
                                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
                                        {cart.length} items
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-stone-400 hover:text-stone-600 p-1 rounded-full hover:bg-stone-200 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                        <div className="bg-stone-100 p-6 rounded-full">
                                            <ShoppingBag className="w-12 h-12 text-stone-300" />
                                        </div>
                                        <div>
                                            <p className="text-stone-800 font-medium text-lg">Your cart is empty</p>
                                            <p className="text-stone-500 text-sm mt-1">Looks like you haven't added anything yet.</p>
                                        </div>
                                        <button
                                            onClick={() => setIsCartOpen(false)}
                                            className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline"
                                        >
                                            Start Shopping
                                        </button>
                                    </div>
                                ) : (
                                    cart.map((item) => (
                                        <div key={item._id} className="flex gap-4">
                                            <div className="w-20 h-20 flex-shrink-0 bg-stone-100 rounded-lg overflow-hidden">
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-stone-800 font-medium line-clamp-1">{item.name}</h3>
                                                    <p className="text-stone-500 text-sm">{item.category}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-3 bg-stone-50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                            className="p-1 text-stone-400 hover:text-emerald-600 hover:bg-white rounded-md transition-colors shadow-sm"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-sm font-medium text-stone-800 w-4 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                            className="p-1 text-stone-400 hover:text-emerald-600 hover:bg-white rounded-md transition-colors shadow-sm"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-stone-800">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="text-stone-300 hover:text-red-500 self-start p-1 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {cart.length > 0 && (
                                <div className="border-t border-stone-100 p-6 bg-stone-50 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-stone-600">
                                            <span>Subtotal</span>
                                            <span>${cartTotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-stone-600">
                                            <span>Delivery</span>
                                            <span className="text-emerald-600 font-medium">Free</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold text-stone-800 pt-2 border-t border-stone-200">
                                            <span>Total</span>
                                            <span>${cartTotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-200 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        Checkout <ShoppingBag className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
            />
        </>
    );
};

export default CartDrawer;
