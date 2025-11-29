import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pretend account created for: ${user.email}`);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-xl p-8 rounded-xl w-full max-w-md border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="input-box"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="input-box"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <button type="submit" className="btn-primary w-full mt-2 bg-green-600 hover:bg-green-700">
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
