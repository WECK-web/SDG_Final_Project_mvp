import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Leaf, Menu, X, ShoppingBag, LayoutDashboard, Home, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsCartOpen, cartCount } = useCart();


  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${isActive(path)
      ? "bg-emerald-100 text-emerald-700"
      : "text-stone-600 hover:bg-stone-100 hover:text-emerald-600"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            Farm<span className="text-emerald-600">Connect</span>

          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass("/")}>
              <Home className="w-4 h-4" /> Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass("/products")}>
              <ShoppingBag className="w-4 h-4" /> Products
            </NavLink>
            <SignedIn>
              <NavLink to="/dashboard" className={navLinkClass("/dashboard")}>
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </NavLink>
            </SignedIn>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-stone-600 hover:text-emerald-600 font-medium px-4 py-2 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 border-2 border-emerald-100"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-stone-600 hover:text-emerald-600 transition-colors ml-2"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 hover:text-emerald-600 p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg ${isActive("/") ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-stone-600"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg ${isActive("/products") ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-stone-600"}`}
            >
              Products
            </NavLink>
            <SignedIn>
              <NavLink
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${isActive("/dashboard") ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-stone-600"}`}
              >
                Dashboard
              </NavLink>
            </SignedIn>

            <div className="pt-4 border-t border-stone-100 mt-2 flex flex-col gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full text-center py-3 text-stone-600 font-medium border border-stone-200 rounded-lg">
                    Sign In
                  </button>
                </SignInButton>
                <SignInButton mode="modal">
                  <button className="w-full text-center py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-sm">
                    Get Started
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
      <CartDrawer />
    </nav>

  );
};

export default Navbar;
