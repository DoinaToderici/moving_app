import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

export default function Menu() {
  const { isLogged, handleLogout } = useContext(LoginContext);
  return (
    <div
      className="bg-warning py-3"
      style={{
        position: "sticky",
        top: "0",
        width: "100vw",
      }}
    >
      <nav className="navbar navbar-expand container navbar-dark px-3">
        <ul className="navbar-nav">
          <li className="nav-item me-3">
            <Link to="/" className="text-white">
              Accueil
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/about" className="text-white">
              Qui sommes-nous
            </Link>
          </li>
          {isLogged() ? (
            <li className="nav-item">
              <Link
                className="text-white"
                onClick={() => {
                  handleLogout();
                }}
              >
                Deconnexion
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="text-white">
                Connexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
