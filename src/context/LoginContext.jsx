import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginContextProvider = function ({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [update, setUpdate] = useState(true);

  function login(userDb) {
    setUser(userDb);
    localStorage.setItem("login", JSON.stringify(userDb));
  }

  function isLogged() {
    return user && Object.keys(user).length > 0;
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("login");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  function handleLogout() {
    setUser({});
    localStorage.clear();
    navigate("/login");
  }

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        login,
        isLogged,
        handleLogout,
        update,
        setUpdate,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
