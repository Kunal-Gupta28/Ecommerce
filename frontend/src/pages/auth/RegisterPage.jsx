import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { registerUser } from "../../redux/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  /* Redirect if already logged in */
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  /* Show backend errors */
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Browser already validated the form
    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        toast.success("Registration successful");
        navigate("/");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={6}
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-700 text-white py-2 rounded font-semibold disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
