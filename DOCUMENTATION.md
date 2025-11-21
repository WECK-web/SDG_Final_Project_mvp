# FarmConnect Documentation 📚

## 🏗️ Project Structure

```
farmconnect/
├── frontend/          # React Frontend Application
│   ├── src/
│   │   ├── components/  # Reusable UI components (Navbar, Footer, CartDrawer, etc.)
│   │   ├── pages/       # Page components (Home, Products, Dashboard)
│   │   ├── context/     # Global state (CartContext, ToastContext)
│   │   └── api/         # API configuration (axios.js)
│   └── ...
├── backend/           # Node.js/Express Backend
│   ├── models/        # Mongoose Models (Product, Order, User)
│   ├── routes/        # API Routes
│   └── ...
└── README.md          # Project Overview
```

## 🔌 API Endpoints

### Products
- `GET /api/products`: Fetch all products.
- `POST /api/products`: Add a new product (Protected).
- `PUT /api/products/:id`: Update product details/stock (Protected).
- `DELETE /api/products/:id`: Remove a product (Protected).

### Orders
- `POST /api/orders`: Create a new order.
- `GET /api/orders`: Fetch user/farmer orders (Protected).

## 🎨 Design System

- **Colors:**
  - Primary: Emerald Green (`bg-emerald-600`, `text-emerald-900`)
  - Background: Stone (`bg-stone-50`)
  - Accents: Amber, Blue, Red (for status/alerts)
- **Typography:**
  - Sans-serif (Inter/System default)
- **Icons:**
  - Lucide React library

## 🛒 Key Features Implementation

### Shopping Cart
- Implemented using `CartContext` for global state management.
- Persists data to `localStorage`.
- `CartDrawer` component provides a slide-out UI for managing items.

### Dashboard
- Provides farmers with quick actions: "Add Product", "Update Inventory".
- Visualizes data using `StatCard` components.
- *Note: Currently uses mock data fallback if backend is unreachable.*

### Authentication
- Uses **Clerk** for secure user management.
- Frontend protects routes using `ProtectedRoute` wrapper.
- Backend validates tokens via middleware.

## 🚀 Deployment Guide

### Frontend (Vercel/Netlify)
1.  Build the project: `npm run build`
2.  Deploy the `dist` folder.
3.  Set environment variable `VITE_API_URL` to your production backend URL.

### Backend (Render/Heroku)
1.  Set environment variables (`MONGODB_URI`, `CLERK_API_KEY`, etc.).
2.  Start command: `npm start`.
