import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const success = login(email, password);
    if (!success) {
      setError("Invalid email or password");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full mb-3 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full mb-4 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-red-700 text-white w-full py-3 rounded font-semibold"
      >
        Login
      </button>

      <p className="text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-red-700 font-medium">
          Register
        </Link>
      </p>
    </div>
  );
}
