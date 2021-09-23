import axios from 'axios';
import { AuthResponse } from '../models/response/RegResponse';

const API_URL = process.env.REACT_APP_API_URL;

const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const refresh = localStorage.getItem('refresh_token');
        if (refresh) {
          const response = await axios.post<AuthResponse>(
            `${process.env.REACT_APP_API_URL}/refresh`,
            {refresh_token: refresh}
          );
          localStorage.setItem('access_token', response.data?.access_token);
          return $api.request(originalRequest);
        }
      } catch (e: any) {
        console.warn('Пользователь не авторизован');
      }
    }
    throw error
  }
);

export default $api;
