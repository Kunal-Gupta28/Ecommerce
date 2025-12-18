import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, addToCart, decreaseQty, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!cart.length) return <p className="p-10">Cart is empty</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-4">
          <span>{item.name}</span>
          <div>
            <button onClick={() => decreaseQty(item.id)}>−</button>
            <span className="mx-2">{item.qty}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        </div>
      ))}

      <h2 className="font-bold mt-6">Total: ₹ {cartTotal}</h2>

      <button
        onClick={() => navigate("/checkout")}
        className="bg-red-700 text-white px-6 py-2 mt-4 rounded"
      >
        Checkout
      </button>
    </div>
  );
}
