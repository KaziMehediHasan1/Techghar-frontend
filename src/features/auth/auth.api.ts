import http from '@/services/http';

export const loginApi = (payload: { email: string; password: string }) => {
  return http.axiosInstance.post('/user/auth/login', payload);
};

export const signupApi = (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  return http.axiosInstance.post('/user/auth/register', payload);
};
