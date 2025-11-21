import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold tracking-tight">FarmConnect</span>
            </Link>
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              <Link to="/products" className="text-white hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-white hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <SignedOut>
              <Link to="/" className="text-white hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link to="/signup" className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
