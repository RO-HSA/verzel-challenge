import logo from "@/assets/logo-verzel.svg";
import { useState } from "react";
import { FaRegCircleUser, FaClipboardUser } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const { container, navbar, navbarItem } = styles;
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className={container}>
      <img src={logo} alt="Logo" />
      <nav className={navbar}>
        {isLogged ? (
          <Link to="/painel" className={navbarItem}>
            <FaClipboardUser size={24} />
            <span>Painel</span>
          </Link>
        ) : (
          <>
            <Link to="/login" className={navbarItem}>
              <RiLoginBoxLine size={24} />
              <span>Login</span>
            </Link>
            <Link to="/register" className={navbarItem}>
              <FaRegCircleUser size={24} />
              <span>Cadastre-se</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
