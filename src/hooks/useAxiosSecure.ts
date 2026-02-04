import axios from "axios";
import { axiosInstance } from "@/hooks/useAxiosInstance";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

const useAxiosSecure = () => {
  const { accessToken, setToken, logout } = useAuthStore();

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
              "https://your-api-url.com/refresh-token",
              {},
              { withCredentials: true },
            );

            const newAccessToken = data.accessToken;
            setToken(newAccessToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            logout();
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
  }, [accessToken, setToken, logout]);

  return axiosInstance;
};

export default useAxiosSecure;
