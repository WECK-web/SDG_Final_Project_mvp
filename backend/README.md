

---

# 🌾 Farm2Table – Backend API

### 🚀 Node.js • Express.js • MongoDB (Mongoose)

The **Farm2Table Backend API** powers a real-time marketplace connecting farmers directly with consumers.
It provides secure data storage, CRUD operations, API endpoints, and database connectivity for the Farm2Table platform.

---

## 📌 Features

* ✔️ RESTful API using Express.js
* ✔️ MongoDB Atlas connection using Mongoose
* ✔️ Product Management (CRUD)
* ✔️ Centralized Error Handling
* ✔️ Environment variable support (dotenv)
* ✔️ Auto-reload with Nodemon (development mode)
* ✔️ Clean folder structure for scalability
* ✔️ Production-ready configuration

---

## 📁 Project Structure

```
backend/
│
├── server.js
├── package.json
├── .env
│
└── src/
    ├── config/
    │   └── db.js
    │
    ├── models/
    │   └── Product.js
    │
    ├── controllers/
    │   └── productController.js
    │
    ├── routes/
    │   └── productRoutes.js
    │
    ├── middleware/
    │   └── errorHandler.js
```

---

## 🔧 Tech Stack

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| **Node.js**       | Backend runtime                 |
| **Express.js**    | Web framework for routing & API |
| **MongoDB Atlas** | Cloud database                  |
| **Mongoose**      | ODM for MongoDB                 |
| **dotenv**        | Environment variables           |
| **Nodemon**       | Dev auto-reload                 |

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/farm2table-mvp.git
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 4️⃣ Start development server

```bash
npm run dev
```

You should see:

```
🚀 Server running on port 5000
MongoDB Connected: <cluster>
```

---

## 🛠️ API Endpoints

### 📦 Products API

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/products`     | Get all products  |
| POST   | `/api/products`     | Create a product  |
| GET    | `/api/products/:id` | Get product by ID |
| PUT    | `/api/products/:id` | Update product    |
| DELETE | `/api/products/:id` | Delete product    |

---

## 🔒 Environment Variables

| Key         | Description                     |
| ----------- | ------------------------------- |
| `PORT`      | Server port number              |
| `MONGO_URI` | MongoDB Atlas connection string |

---

## 🧪 Testing with Postman / Thunder Client

Example **POST** request body:

```json
{
  "name": "Fresh Tomatoes",
  "description": "Organic tomatoes directly from the farm",
  "price": 150,
  "category": "Vegetables",
  "image": "https://example.com/tomatoes.jpg"
}
```

---

## 🧱 Folder Structure Philosophy

This backend uses a **scalable modular architecture**:

* **Controllers** → Business logic
* **Routes** → API endpoints
* **Models** → Database schemas
* **Config** → Database and environment setup
* **Middleware** → Error handling, validations, etc.

This ensures the project can grow smoothly as features expand.

---

## 🐛 Error Handling

Custom error handler middleware ensures consistent API responses:

* 404 Not Found
* 500 Server Error
* MongoDB validation errors
* Missing fields
* Wrong IDs

---

## 🏁 Production Build

To run in production:

```bash
npm start
```

Use services like Railway, Render, or Docker for deployment.

---

## 👨‍💻 Contributors

* **Mike Ciuri** — Backend Developer
* (Add more team members here)

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## ⭐ Support the Project


