import { Cars } from "@/types/cars";
import { UserInfo } from "@/types/user";
import { TOKEN_KEY } from "@/utils/keys";
import { logout } from "@/utils/utils";
import { Register } from "@tanstack/react-query";
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (response: any) => {
    const token = localStorage.getItem(TOKEN_KEY);
    response.headers.Authorization = `Bearer ${token}`;
    return response;
  },
  err => {
    return Promise.reject(err);
  },
);

apiClient.interceptors.response.use(
  response => response,
  err => {
    if (err.response.status === 401) {
      logout();
    } else {
      return Promise.reject(err);
    }
  },
);

const getCars = async ({ queryKey }: any) => {
  const queryUrl = queryKey[0];

  const { data } = await apiClient.get<Cars[]>(queryUrl);

  return data;
};

const register = async (data: Register) => {
  return await apiClient.post<UserInfo>("users", data);
};

const apiServices = {
  getCars,
  register,
};

export default apiServices;
