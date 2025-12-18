import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="border p-6 rounded bg-white shadow">
        <p className="mb-2">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="mb-4">
          <strong>Email:</strong> {user.email}
        </p>

        <div className="flex gap-4">
          <button
            onClick={logout}
            className="bg-gray-800 text-white px-6 py-2 rounded"
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-red-700 text-white px-6 py-2 rounded"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
