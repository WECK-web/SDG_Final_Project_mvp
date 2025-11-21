# FarmConnect 🚜

**FarmConnect** (formerly Farm2Table) is a direct-to-consumer platform connecting local farmers with conscious consumers. We empower communities by cutting out the middleman, ensuring fresh produce, fair prices, and a sustainable food ecosystem.

## 🌟 Features

- **For Consumers:**
  - Browse fresh, local produce.
  - Real-time inventory updates.
  - Seamless shopping cart and checkout experience.
  - Order tracking and history.
- **For Farmers:**
  - Dashboard to manage inventory and products.
  - Real-time sales analytics.
  - Order processing tools.

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Axios (API Integration)
- React Router DOM (Navigation)

**Backend:**
- Node.js & Express
- MongoDB (Database)
- Clerk (Authentication - *Integration in progress*)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/farmconnect.git
    cd farmconnect
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    # Create .env file with:
    # PORT=5000
    # MONGODB_URI=your_mongodb_uri
    npm start
    ```

3.  **Setup Frontend:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

4.  **Access the App:**
    - Frontend: `http://localhost:5176`
    - Backend: `http://localhost:5000`

## 📄 Documentation

See [DOCUMENTATION.md](./DOCUMENTATION.md) for detailed API endpoints and component structure.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
