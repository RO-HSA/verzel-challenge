import { useState } from "react";

import Loading from "../UI/Loading";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="formContainer">
      <div className="wrapper">
        <form className="form">
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
            {password ? (
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
