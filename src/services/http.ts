import { CONFIG } from "@/config/env";
import { useAuthStore } from "@/features/auth/auth.store";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// baseURL -
const axiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// axios secured funtion using interceptors -
const useAxiosSecure = () => {
  const { accessToken, setToken, logout } = useAuthStore();
  const navigate = useNavigate();
  // console.log(accessToken,"secure path")

  useEffect(() => {
    // Request Interceptor
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response Interceptor
    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const { data } = await axios.post(
              `${CONFIG.apiUrl}/refresh-token`,
              {},
              { withCredentials: true },
            );

            const newAccessToken = data.accessToken;
            setToken(newAccessToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            logout();
            navigate("/login");
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, setToken, logout, navigate]);

  return axiosInstance;
};

const http = {
  axiosInstance,
  useAxiosSecure,
};

export default http;
