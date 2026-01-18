import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, ShoppingCart, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../redux/slices/authSlice";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🔥 Redux state
  const cartItems = useSelector((state) => state.cart.items || []);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <header className="w-full shadow-md bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto border-b py-2 px-4 flex items-center justify-between text-sm">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-semibold text-gray-800 cursor-pointer"
        >
          <img src="/logo.png" alt="Medono India" className="h-8" />
          <div>
            <p className="font-bold text-gray-900">Medono India</p>
            <p className="text-xs text-gray-600">📍 Alipur, New Delhi</p>
          </div>
        </div>

        {/* Contact + Auth */}
        <div className="flex items-center gap-3">
          <a
            href="tel:08047304758"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            <Phone size={16} /> Call
          </a>

          <a
            href="mailto:sales@medonoindia.com"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            <Mail size={16} /> Email
          </a>

          {isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center gap-1 text-sm font-semibold"
              >
                <User size={16} />
                {user?.name || "Profile"}
              </button>

              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 text-sm font-semibold"
            >
              <User size={16} /> Login
            </button>
          )}
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="w-full bg-gray-800">
        <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-3 text-white gap-4">
          {/* Menu */}
          <div className="flex items-center gap-6 font-semibold">
            <button className="flex items-center gap-2 hover:text-red-400">
              <Menu size={20} />
              Our Products
            </button>

            <button
              onClick={() => navigate("/")}
              className="hover:text-red-400"
            >
              Home
            </button>
          </div>

          {/* Search + Cart */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search Products / Services"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="px-4 py-2 text-gray-700 outline-none w-64"
              />
              <button
                onClick={handleSearch}
                className="bg-red-600 px-4 py-2 text-white"
              >
                Search
              </button>
            </div>

            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="relative flex items-center gap-2 bg-red-600 px-4 py-2 rounded-md font-semibold"
            >
              <ShoppingCart size={18} />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
