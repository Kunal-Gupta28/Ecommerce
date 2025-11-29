import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600 dark:text-blue-400"
        >
          ShopEase
        </Link>

        <div className="flex gap-4 items-center font-medium">
          <NavLink to="/" current={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/login" current={location.pathname === "/login"}>
            Login
          </NavLink>
          <NavLink to="/register" current={location.pathname === "/register"}>
            Register
          </NavLink>

          <Link
            to="/cart"
            className="relative hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 transition text-xl"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-[7px] py-px rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <button
            className="ml-2 text-xl hover:scale-110 transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, current, children }) {
  return (
    <Link
      to={to}
      className={`hover:text-blue-600 dark:hover:text-blue-400 transition ${
        current ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"
      }`}
    >
      {children}
    </Link>
  );
}
