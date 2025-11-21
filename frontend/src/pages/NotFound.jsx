import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <div className="bg-emerald-50 p-8 rounded-full mb-8 animate-bounce">
                <span className="text-6xl">🥕</span>
            </div>
            <h1 className="text-6xl font-bold text-emerald-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-stone-800 mb-4">Page Not Found</h2>
            <p className="text-stone-600 max-w-md mb-8">
                Oops! It looks like this page has been harvested. The content you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                    <Home className="w-5 h-5" /> Go Home
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="bg-white border border-stone-200 hover:bg-stone-50 text-stone-600 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                    <ArrowLeft className="w-5 h-5" /> Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
