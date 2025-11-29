import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <p>Product not found.</p>
        <Link to="/" className="text-blue-600">
          ← Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Link to="/" className="text-blue-600 dark:text-blue-400">
        ← Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <img
          src={product.img}
          alt={product.name}
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {product.description}
          </p>

          <p className="text-3xl text-blue-600 dark:text-blue-400 font-bold">
            ₹{product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="btn-primary w-full mt-4"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
