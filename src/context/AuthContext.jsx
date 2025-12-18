import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("registeredUser"));
    if (!stored || stored.email !== email || stored.password !== password) {
      return false;
    }
    localStorage.setItem("user", JSON.stringify(stored));
    setUser(stored);
    return true;
  };

  const register = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
