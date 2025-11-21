import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const CheckoutModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('details'); // details, processing, success
    const { cartTotal, clearCart } = useCart();
    const { addToast } = useToast();

    useEffect(() => {
        if (isOpen) {
            setStep('details');
        }
    }, [isOpen]);

    const handlePayment = (e) => {
        e.preventDefault();
        setStep('processing');

        // Simulate payment processing
        setTimeout(() => {
            setStep('success');
            clearCart();
            addToast('Payment successful!', 'success');
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative">

                {/* Close Button */}
                {step !== 'processing' && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                )}

                {/* Content */}
                <div className="p-8">
                    {step === 'details' && (
                        <>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-emerald-100 p-3 rounded-full">
                                    <CreditCard className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-stone-800">Checkout</h2>
                            </div>

                            <div className="mb-8">
                                <p className="text-stone-600 mb-2">Total Amount</p>
                                <p className="text-4xl font-bold text-stone-800">${cartTotal.toFixed(2)}</p>
                            </div>

                            <form onSubmit={handlePayment} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Card Number</label>
                                    <input
                                        type="text"
                                        placeholder="0000 0000 0000 0000"
                                        className="w-full border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-1">Expiry</label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="w-full border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-1">CVC</label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            className="w-full border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all transform active:scale-95 mt-4"
                                >
                                    Pay ${cartTotal.toFixed(2)}
                                </button>
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
                                className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3 px-8 rounded-xl transition-colors"
                            >
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
