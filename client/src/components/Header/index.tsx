import logo from "@/assets/logo-verzel.svg";
import { useState } from "react";
import { FaRegCircleUser, FaClipboardUser } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const { container, navbar, navbarItem } = styles;
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className={container}>
      <nav className={navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" width={118} height={89} />
        </Link>
        {isLogged ? (
          <Link to="/admin" className={navbarItem}>
            <FaClipboardUser size={24} />
            <span>Admin</span>
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
