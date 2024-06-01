import { CarResponse, Cars } from "@/types/cars";
import { Login } from "@/types/login";
import { Register } from "@/types/register";
import { UserInfo, UserTokens } from "@/types/user";
import { TOKEN_KEY } from "@/utils/keys";
import { logout } from "@/utils/utils";
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

  const { data } = await apiClient.get<CarResponse[]>(queryUrl);

  return data;
};

const createCar = async (data: Cars) => {
  return await apiClient.post("cars", data);
};

const updateCar = async (data: Cars) => {
  const id = data.id;

  const payload = {
    name: data.name,
    brand: data.brand,
    model: data.model,
    year: data.year,
    mileage: data.mileage,
    price: data.price,
    transmission: data.transmission,
  };

  return await apiClient.patch(`cars/${id}`, payload);
};

const deleteCar = async (id: string | undefined) => {
  return await apiClient.delete(`cars/${id}`);
};

const register = async (data: Register) => {
  return await apiClient.post<UserInfo>("users", data);
};

const login = async (data: Login) => {
  return await apiClient.post<UserTokens>("auth", data);
};

const apiServices = {
  getCars,
  createCar,
  updateCar,
  deleteCar,
  register,
  login,
};

export default apiServices;
