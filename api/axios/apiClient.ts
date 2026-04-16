import axios from "axios";
import env from "@/config/env";
import "./interceptors";

const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;