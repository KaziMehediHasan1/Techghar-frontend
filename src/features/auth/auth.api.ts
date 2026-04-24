import http from '@/services/http';

export const loginApi = (payload: { email: string; password: string }) => {
  return http.axiosInstance.post('/user/auth/login', payload);
};

export const signupApi = (payload: {
  firstName: string;
  email: string;
  password: string;
}) => {
  return http.axiosInstance.post('/user/auth/register', payload);
};

export const logoutApi = () => {
  return http.axiosInstance.post('/user/auth/logout');
};
