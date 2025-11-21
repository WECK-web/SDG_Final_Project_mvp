import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={product.image || "https://placehold.co/600x400?text=No+Image"}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
                    <button
                        onClick={() => onAddToCart(product)}
                        disabled={product.stock === 0}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${product.stock > 0
                                ? "bg-primary text-white hover:bg-secondary"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
