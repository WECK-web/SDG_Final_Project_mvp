import React, { useEffect, useState } from "react";
import { Package, DollarSign, Truck, Activity, Plus, TrendingUp, AlertCircle, X, Save, Edit } from "lucide-react";
import { useToast } from "../context/ToastContext";
import api from "../api/axios";

// Mock data for fallback
const MOCK_PRODUCTS = [
  { _id: '1', name: 'Organic Apples', price: 2.99, category: 'Fresh Fruit', stock: 150, imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=100&q=80' },
  { _id: '2', name: 'Heirloom Tomatoes', price: 4.50, category: 'Vegetables', stock: 45, imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=100&q=80' },
  { _id: '3', name: 'Artisanal Bread', price: 6.00, category: 'Baked Goods', stock: 20, imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=100&q=80' },
  { _id: '4', name: 'Local Honey', price: 12.00, category: 'Pantry', stock: 85, imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=100&q=80' },
];

const Dashboard = () => {
  const { addToast } = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          // Fallback to mock data if API returns empty (for demo purposes)
          setProducts(MOCK_PRODUCTS);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        addToast("Failed to load inventory. Using offline data.", "error");
        setProducts(MOCK_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [addToast]);

  // Stats calculation
  const totalRevenue = 12580;
  const activeOrders = 12;
  const totalStock = products.reduce((acc, curr) => acc + (curr.stock || 0), 0);
  const lowStockItems = products.filter(p => (p.stock || 0) < 50).length;

  const handleAddProduct = (e) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    addToast("Product added successfully!", "success");
  };

  const handleUpdateStock = (e) => {
    e.preventDefault();
    setIsEditModalOpen(false);
    addToast("Inventory updated successfully!", "success");
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-stone-800">Farmer Dashboard</h1>
            <p className="text-stone-500">Welcome back, Green Valley Farm</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> Add New Product
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            trend="+12.5%"
            color="bg-emerald-100 text-emerald-700"
          />
          <StatCard
            title="Active Orders"
            value={activeOrders}
            icon={Truck}
            trend="+2"
            color="bg-blue-100 text-blue-700"
          />
          <StatCard
            title="Total Stock"
            value={totalStock}
            icon={Package}
            color="bg-amber-100 text-amber-700"
          />
          <StatCard
            title="Low Stock Alerts"
            value={lowStockItems}
            icon={AlertCircle}
            color="bg-red-100 text-red-700"
            alert={lowStockItems > 0}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Product Inventory */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-stone-800">Current Inventory</h2>
              <button className="text-emerald-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-50 text-stone-500 text-xs uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-3 text-left">Product</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-left">Stock</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-stone-500">
                        Loading inventory...
                      </td>
                    </tr>
                  ) : products.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-stone-500">
                        No products found. Add your first product!
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product._id} className="hover:bg-stone-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={product.imageUrl} alt="" className="w-10 h-10 rounded-lg object-cover bg-stone-200" />
                            <span className="font-medium text-stone-800">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-stone-600 text-sm">{product.category}</td>
                        <td className="px-6 py-4 text-stone-800 font-medium">${product.price?.toFixed(2)}</td>
                        <td className="px-6 py-4 text-stone-600">{product.stock}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock < 50
                            ? "bg-red-100 text-red-700"
                            : "bg-emerald-100 text-emerald-700"
                            }`}>
                            {product.stock < 50 ? "Low Stock" : "In Stock"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openEditModal(product)}
                            className="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center gap-1"
                          >
                            <Edit className="w-4 h-4" /> Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity / Quick Actions */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6">
              <h2 className="text-lg font-bold text-stone-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => addToast("Inventory sync started...", "info")}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                >
                  <span className="text-stone-600 group-hover:text-emerald-700 font-medium">Update Inventory</span>
                  <Package className="w-4 h-4 text-stone-400 group-hover:text-emerald-600" />
                </button>
                <button
                  onClick={() => addToast("Processing orders...", "info")}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                >
                  <span className="text-stone-600 group-hover:text-emerald-700 font-medium">Process Orders</span>
                  <Truck className="w-4 h-4 text-stone-400 group-hover:text-emerald-600" />
                </button>
                <button
                  onClick={() => addToast("Generating analytics report...", "info")}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                >
                  <span className="text-stone-600 group-hover:text-emerald-700 font-medium">View Analytics</span>
                  <Activity className="w-4 h-4 text-stone-400 group-hover:text-emerald-600" />
                </button>
              </div>
            </div>

            <div className="bg-emerald-900 rounded-xl shadow-sm p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-bold mb-2 relative z-10">Market Insights</h3>
              <p className="text-emerald-200 text-sm mb-4 relative z-10">
                Tomatoes are trending up 15% in your region this week. Consider increasing supply.
              </p>
              <button className="text-xs font-bold bg-white text-emerald-900 px-3 py-2 rounded-lg hover:bg-emerald-50 transition-colors relative z-10">
                View Market Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-stone-800">Add New Product</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Product Name</label>
                <input type="text" className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. Organic Carrots" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Price ($)</label>
                  <input type="number" step="0.01" className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="0.00" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Stock</label>
                  <input type="number" className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="0" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Category</label>
                <select className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Dairy</option>
                  <option>Meat</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors mt-2">
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Stock Modal */}
      {isEditModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-stone-800">Update Stock</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleUpdateStock} className="space-y-4">
              <p className="text-stone-600 text-sm">Updating inventory for <span className="font-bold">{selectedProduct.name}</span></p>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Current Stock</label>
                <input type="number" defaultValue={selectedProduct.stock} className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, trend, color, alert }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      {trend && (
        <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
          {trend}
        </span>
      )}
      {alert && (
        <span className="bg-red-50 text-red-700 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          Action Needed
        </span>
      )}
    </div>
    <h3 className="text-stone-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-stone-800 mt-1">{value}</p>
  </div>
);

export default Dashboard;