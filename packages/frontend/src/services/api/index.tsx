import axios from "axios";
import type { Session } from "../../contexts/SessionContext";

const API_URL = "http://localhost:4000/api"; // <-- ¡Ajusta esto a la URL de tu backend!

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const sessionString = localStorage.getItem("session");

    if (sessionString) {
      const session: Session = JSON.parse(sessionString);

      if (session.token) {
        config.headers.Authorization = `Bearer ${session.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
