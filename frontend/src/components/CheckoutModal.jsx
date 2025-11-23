import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader, CreditCard, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import api from '../api/axios';

const CheckoutModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('details'); // details, processing, success
    const { cart, cartTotal, clearCart } = useCart();
    const { addToast } = useToast();

    useEffect(() => {
        if (isOpen) {
            setStep('details');
        }
    }, [isOpen]);

    const handlePayment = async (e) => {
        e.preventDefault();
        setStep('processing');

        const formData = new FormData(e.target);
        const userDetails = {
            name: formData.get('name'),
            email: formData.get('email')
        };

        try {
            // Create order in backend
            await api.post('/orders', {
                user: userDetails,
                orderItems: cart.map(item => ({
                    product: item._id,
                    name: item.name,
                    qty: item.quantity,
                    price: item.price,
                    image: item.imageUrl
                })),
                totalPrice: cartTotal
            });

            // Success
            setStep('success');
            clearCart();
            addToast('Order placed successfully!', 'success');
        } catch (error) {
            console.error("Checkout failed:", error);
            setStep('details'); // Go back to details
            addToast('Payment failed. Please try again.', 'error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in duration-200 flex flex-col">

                {/* Header */}
                <div className="px-8 py-6 border-b border-stone-100 flex items-center justify-between sticky top-0 bg-white z-20">
                    <h2 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-emerald-600" />
                        Secure Checkout
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-stone-400 hover:text-stone-600 p-1 rounded-full hover:bg-stone-100 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto">
                    {step === 'details' && (
                        <>
                            {/* Order Summary */}
                            <div className="mb-8 bg-stone-50 rounded-xl p-4 border border-stone-100">
                                <h3 className="text-sm font-bold text-stone-700 mb-3 flex items-center gap-2">
                                    <ShoppingBag className="w-4 h-4" />
                                    Order Summary
                                </h3>
                                <div className="space-y-3 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                    {cart.map((item) => (
                                        <div key={item._id} className="flex justify-between items-center text-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-md bg-white border border-stone-200 overflow-hidden flex-shrink-0">
                                                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-stone-800 line-clamp-1">{item.name}</p>
                                                    <p className="text-stone-500 text-xs">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <p className="font-medium text-stone-800">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-3 border-t border-stone-200 flex justify-between items-center">
                                    <span className="text-stone-600 font-medium">Total to Pay</span>
                                    <span className="text-2xl font-bold text-emerald-700">${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <form onSubmit={handlePayment} className="space-y-5">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-stone-700">Customer Details</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Full Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-stone-700">Payment Information</h3>
                                    <div>
                                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Card Number</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="0000 0000 0000 0000"
                                                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none font-mono transition-all"
                                                required
                                            />
                                            <CreditCard className="w-5 h-5 text-stone-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Expiry</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none font-mono transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">CVC</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none font-mono transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="flex-1 bg-white border border-stone-200 text-stone-600 font-bold py-3 rounded-xl hover:bg-stone-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-200 transition-all transform active:scale-[0.98]"
                                    >
                                        Pay ${cartTotal.toFixed(2)}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {step === 'processing' && (
                        <div className="flex flex-col items-center justify-center py-12">
                            <Loader className="w-16 h-16 text-emerald-600 animate-spin mb-6" />
                            <h3 className="text-xl font-bold text-stone-800 mb-2">Processing Payment</h3>
                            <p className="text-stone-500">Please wait while we confirm your order...</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="bg-emerald-100 p-4 rounded-full mb-6 animate-bounce">
                                <CheckCircle className="w-12 h-12 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-stone-800 mb-2">Order Confirmed!</h2>
                            <p className="text-stone-600 mb-8">
                                Thank you for your purchase. Your order has been sent to the farmers.
                            </p>
                            <button
                                onClick={onClose}
                                className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Continue Shopping
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
