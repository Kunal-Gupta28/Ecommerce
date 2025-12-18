import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.qty * Number(item.price),
    0
  );

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please enter name and phone");
      return;
    }

    const message = encodeURIComponent(
      `New Order\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\nItems:\n${cart
        .map(
          (i) => `${i.name} x ${i.qty} = ₹${i.qty * i.price}`
        )
        .join("\n")}\n\nTotal: ₹${total}`
    );

    clearCart();
    navigate("/order-success");
window.open(`https://wa.me/918047304758?text=${message}`, "_blank");

  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-bold">Cart is empty</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-red-700 text-white px-6 py-2 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Form */}
      <div>
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <input
          placeholder="Full Name"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Address (optional)"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white w-full py-3 rounded font-semibold"
        >
          Place Order on WhatsApp
        </button>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.qty}</span>
            <span>₹ {item.qty * item.price}</span>
          </div>
        ))}

        <hr className="my-4" />

        <h3 className="text-lg font-bold">Total: ₹ {total}</h3>
      </div>

    </div>
  );
}
