import { AxiosResponse } from "axios";

import { UserTokens } from "./user";

export interface Login {
  email: string;
  password: string;
}

export type LoginResponse = AxiosResponse<UserTokens, any>;
