import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pretend login as: ${email}`);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-xl p-8 rounded-xl w-full max-w-md border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input-box"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box"
          required
        />

        <button type="submit" className="btn-primary w-full mt-2">
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 dark:text-blue-400 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
