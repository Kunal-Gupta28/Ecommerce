import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="text-gray-700 mb-6">
        Thank you for contacting Medono India.  
        Our team will get back to you shortly.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-red-700 text-white px-6 py-3 rounded font-semibold"
      >
        Continue Shopping
      </button>
    </div>
  );
}
