import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition p-4 flex flex-col relative">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />

      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {product.description}
      </p>

      <p className="mt-auto font-semibold text-blue-600 dark:text-blue-400 text-lg">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="btn-primary w-full mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
}
