import React from 'react';
import { Plus, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-100 group">
      <div className="relative h-48 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-300 bg-stone-50">
            <span className="text-4xl">🥬</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-emerald-700 shadow-sm">
          {product.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-stone-800 line-clamp-1">{product.name}</h3>
          <span className="text-lg font-bold text-emerald-600">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>

        {product.farmer && (
          <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
            <User className="w-3 h-3" />
            <span>{product.farmer}</span>
          </div>
        )}

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-stone-100 hover:bg-emerald-600 hover:text-white text-stone-600 font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-emerald-50 group-hover:text-emerald-700"
        >
          <Plus className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
