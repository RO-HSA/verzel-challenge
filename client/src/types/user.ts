export interface UserInfo {
  id?: string;
  name: string;
  email: string;
  user_type: "adm" | "user";
}

export interface UserTokens {
  access_token: string;
  refresh_token: string;
}
