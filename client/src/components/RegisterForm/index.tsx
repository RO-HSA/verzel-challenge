import { useRegisterMutation } from "@/hooks/queries/UsersQueries";
import { RegisterResponse } from "@/types/register";
import { FormEvent, useState } from "react";

import Loading from "../UI/Loading";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSuccess = (response: RegisterResponse) => {
    console.log(response);
  };

  const onError = (error: Error) => {};

  const { mutate, isPending } = useRegisterMutation(onSuccess, onError);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ name, email, password, user_type: "adm" });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
              value={name}
              required
              autoFocus
              autoComplete={name}
            />
          </div>
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
                Registrar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
