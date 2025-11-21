import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: attach JWT token from Clerk (if needed)
api.interceptors.request.use((config) => {
  // Example: attach Clerk JWT token
  const token = localStorage.getItem("clerk_jwt"); // store JWT on login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
