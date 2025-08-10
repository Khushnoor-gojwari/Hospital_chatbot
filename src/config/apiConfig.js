// src/config/apiConfig.js
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000" // FastAPI backend locally
    : "https://hospital-chatbot-backend-0hsf.onrender.com"; // Render API

export default API_BASE_URL;
