import { useLoginMutation } from "@/hooks/queries/UsersQueries";
import { LoginResponse } from "@/types/login";
import { REFRESH_KEY, TOKEN_KEY } from "@/utils/keys";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../UI/Loading";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSuccess = (response: LoginResponse) => {
    localStorage.setItem(TOKEN_KEY, response.data.access_token);
    localStorage.setItem(REFRESH_KEY, response.data.refresh_token);
    navigate("/");
  };

  const onError = () => {};

  const { mutate, isPending } = useLoginMutation(onSuccess, onError);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
              autoComplete={email}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
              autoComplete="current-password"
            />
          </div>
          <div className="btnContainer">
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="loginBtn">
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
