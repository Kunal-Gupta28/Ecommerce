import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }
    register(form);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <input
        placeholder="Full Name"
        className="border p-3 w-full mb-3 rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full mb-3 rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full mb-4 rounded"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="bg-red-700 text-white w-full py-3 rounded font-semibold"
      >
        Register
      </button>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-red-700 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}
