import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="p-3 shadow rounded cursor-pointer hover:shadow-lg"
    >
      <img src={product.image} alt={product.name} className="h-36 mx-auto" />
      <p className="font-bold text-sm mt-2">{product.name}</p>
      <p className="text-red-700 font-semibold">₹ {product.price}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="bg-gray-800 text-white w-full mt-2 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
