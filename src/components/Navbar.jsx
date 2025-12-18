import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Menu } from "lucide-react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="w-full shadow-md bg-white">
      {/* ---------- Top Bar ---------- */}
      <div className="max-w-7xl mx-auto border-b py-2 px-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <img
            src="/logo.png"
            alt="Medono India"
            className="h-8 w-auto object-contain"
          />
          <div>
            <p className="font-bold text-gray-900">Medono India</p>
            <p className="text-xs text-gray-600">📍 Alipur, New Delhi, Delhi</p>
            <span className="text-xs font-medium text-red-600">
              GST No.: 07GSVPK9534A1Z7
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="tel:08047304758"
            className="flex items-center gap-2 bg-red-600 text-white text-sm px-4 py-2 rounded-md font-semibold shadow-md"
          >
            <Phone size={18} /> Call
          </a>

          <a
            href="mailto:sales@medonoindia.com"
            className="flex items-center gap-2 bg-red-600 text-white text-sm px-4 py-2 rounded-md font-semibold shadow-md"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </div>

      {/* ---------- Bottom Menu ---------- */}
      <div className="w-full bg-gray-800 flex justify-center">
        <nav className="max-w-7xl flex-1 flex flex-wrap items-center justify-between px-6 py-3 text-white gap-4">

          {/* Menu */}
          <div className="flex items-center gap-6 font-semibold">
            <button className="flex items-center gap-2 hover:text-red-400 transition">
              <Menu size={20} />
              Our Products
            </button>
            <button className="hover:text-red-400 transition">
              Who We Are
            </button>
            <button className="hover:text-red-400 transition">
              Contact Us
            </button>
          </div>

          {/* Search Box */}
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
              className="bg-red-600 px-4 py-2 text-white font-medium"
            >
              Search
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
}
