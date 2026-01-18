import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      await dispatch(registerUser(form)).unwrap();
      navigate("/");
    } catch (err) {
      // error handled below
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          className="border p-3 w-full mb-3 rounded"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-3 rounded"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded"
          onChange={handleChange}
        />

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-red-700 text-white w-full py-3 rounded font-semibold disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-red-700 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}
