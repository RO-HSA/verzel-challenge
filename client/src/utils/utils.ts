import { TOKEN_KEY } from "./keys";

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
