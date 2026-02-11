import http from "@/services/http";

export const loginApi = (payload: {}) => {
  return http.axiosInstance.post("/auth/login", payload);
};
