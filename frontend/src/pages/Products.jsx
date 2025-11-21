import React, { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import { Search, Filter } from "lucide-react";

// Mock data for fallback
const MOCK_PRODUCTS = [
  { _id: '1', name: 'Organic Heirloom Tomatoes', price: 4.50, category: 'Produce', description: 'Sun-ripened, flavorful heirloom tomatoes perfect for salads.', imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80' },
  { _id: '2', name: 'Fresh Farm Eggs', price: 6.00, category: 'Dairy', description: 'Free-range brown eggs from pasture-raised hens.', imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=400&q=80' },
  { _id: '3', name: 'Artisan Honey', price: 15.00, category: 'Specialty', description: 'Raw, unfiltered honey collected from local wildflowers.', imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80' },
  { _id: '4', name: 'Grass-fed Beef Cuts', price: 12.99, category: 'Meat', description: 'Premium grass-fed beef, ethically raised.', imageUrl: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=400&q=80' },
  { _id: '5', name: 'Seasonal Strawberries', price: 5.50, category: 'Produce', description: 'Sweet and juicy seasonal strawberries.', imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0a6?auto=format&fit=crop&w=400&q=80' },
  { _id: '6', name: 'Fresh Basil Bundle', price: 3.00, category: 'Herbs', description: 'Aromatic fresh basil, perfect for pesto.', imageUrl: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?auto=format&fit=crop&w=400&q=80' },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchProducts = async () => {
    try {
      // Attempt to fetch from API
      const { data } = await api.get("/products");
      if (data && data.length > 0) {
        setProducts(data);
      } else {
        setProducts(MOCK_PRODUCTS);
      }
    } catch (err) {
      console.log("Using mock data due to API error or empty response");
      setProducts(MOCK_PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Fresh from the Farm</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Browse our selection of seasonal produce, ethically raised meats, and artisanal goods.
            Direct from local farmers to your table.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-stone-400 flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-stone-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                  className="mt-4 text-emerald-600 font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
