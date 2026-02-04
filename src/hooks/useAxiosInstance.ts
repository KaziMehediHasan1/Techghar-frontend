import { CONFIG } from "@/config/env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
