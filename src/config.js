// src/config.js
export const BASE_URL = "http://localhost:5000/api/v1";
export const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
