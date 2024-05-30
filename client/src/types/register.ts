import { UserInfo } from "@/types/user";
import { AxiosResponse } from "axios";

export interface Register {
  name: string;
  email: string;
  password: string;
  user_type: "adm" | "user";
}

export type RegisterResponse = AxiosResponse<UserInfo, any>;
