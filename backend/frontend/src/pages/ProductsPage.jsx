import React, { useEffect, useState } from 'react';
import { ProductAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductAPI.getAll();
                setProducts(data);
            } catch (err) {
                setError("Failed to load products. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 mt-10">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fresh from the Farm</h2>
            {products.length === 0 ? (
                <p className="text-center text-gray-500">No products available at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
