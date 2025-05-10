import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";

const http = axios.create({
  baseURL: '',
  timeout: 5000,
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig ) => {
    const token = localStorage.getItem('token');
    if (token && !config.headers.Authorization) config.headers!.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response:AxiosResponse) => {
    if(response.status && response.status !== 200) return Promise.reject(new Error('Network Error'))
    return response.data
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

export { http };