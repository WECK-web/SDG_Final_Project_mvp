# FarmConnect 🌾

> **Connecting Local Farmers with Conscious Consumers**

FarmConnect (formerly Farm2Table) is a modern, full-stack web platform that bridges the gap between local farmers and consumers. By eliminating middlemen, we ensure fresh produce, fair prices, and a sustainable food ecosystem.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://sdg-final-project-mvp-y1e4-60kaze8nd.vercel.app)
[![Backend API](https://img.shields.io/badge/API-active-blue)](https://github.com/WECK-web/SDG_Final_Project_mvp)

## 🚀 Live Application

- **Frontend:** [https://sdg-final-project-mvp-y1e4-60kaze8nd.vercel.app](https://sdg-final-project-mvp-y1e4-60kaze8nd.vercel.app)
- **Backend API:** Deployed on Render
- **Repository:** [GitHub](https://github.com/WECK-web/SDG_Final_Project_mvp)

## ✨ Features

### For Consumers
- 🛒 **Browse Fresh Produce** - Real-time inventory from local farms
- 🛍️ **Smart Shopping Cart** - Seamless cart management with localStorage persistence
- 💳 **Mock Checkout Flow** - Complete payment simulation with order confirmation
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🔔 **Toast Notifications** - Real-time feedback for all user actions

### For Farmers
- 📊 **Comprehensive Dashboard** - Manage inventory, view analytics, and track orders
- ➕ **Product Management** - Add, edit, and update product listings
- 📦 **Inventory Tracking** - Real-time stock level monitoring with low-stock alerts
- 📈 **Sales Analytics** - Revenue tracking and performance metrics
- ⚡ **Quick Actions** - Streamlined workflows for common tasks

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Routing:** React Router DOM v6
- **State Management:** Context API (Cart, Toast)
- **Deployment:** Vercel

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Clerk
- **Deployment:** Render

## 📦 Project Structure

```
farmconnect/
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   ├── CheckoutModal.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── NotFound.jsx
│   │   ├── context/         # Global state
│   │   │   ├── CartContext.jsx
│   │   │   └── ToastContext.jsx
│   │   └── api/             # API configuration
│   │       └── axios.js
│   └── package.json
│
├── backend/                 # Node.js Backend
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── server.js            # Entry point
│   └── package.json
│
├── README.md
├── DOCUMENTATION.md
└── DEPLOYMENT_WALKTHROUGH.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Atlas account or local installation)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/WECK-web/SDG_Final_Project_mvp.git
   cd SDG_Final_Project_mvp
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Add your MongoDB URI and other secrets
   
   npm start
   ```
   Backend runs on `http://localhost:5000`

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   
   # Create .env file
   echo "VITE_API_URL=http://localhost:5000/api" > .env
   
   npm run dev
   ```
   Frontend runs on `http://localhost:5176`

### Environment Variables

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLERK_SECRET_KEY=your_clerk_secret_key
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 📚 Documentation

- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Detailed API endpoints and component architecture
- **[DEPLOYMENT_WALKTHROUGH.md](./DEPLOYMENT_WALKTHROUGH.md)** - Step-by-step deployment guide

## 🎨 Design Philosophy

- **Modern & Clean:** Emerald green color scheme with stone backgrounds
- **User-Centric:** Intuitive navigation and clear call-to-actions
- **Responsive:** Mobile-first design approach
- **Accessible:** Semantic HTML and ARIA labels
- **Performance:** Optimized builds and lazy loading

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built with ❤️ by the FarmConnect Team

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Vercel for frontend deployment
- Render for backend hosting
- Clerk for authentication services
- Unsplash for product images

---

**Made for SDG Final Project** | [Live Demo](https://sdg-final-project-mvp-y1e4-60kaze8nd.vercel.app) | [Report Issues](https://github.com/WECK-web/SDG_Final_Project_mvp/issues)
