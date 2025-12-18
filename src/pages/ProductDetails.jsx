import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import QuoteForm from "../components/QuoteForm";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Flatten products
  const allProducts = products.flatMap((c) => c.items);

  const product = allProducts.find((p) => p.id === Number(id));

  // Safety check
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold">Product not found</h2>
      </div>
    );
  }

  // Recently viewed (optional but professional)
  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("recent")) || [];
    const updated = [
      product,
      ...viewed.filter((p) => p.id !== product.id),
    ].slice(0, 5);
    localStorage.setItem("recent", JSON.stringify(updated));
  }, [product]);

  // Related products
  const related = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Product Info */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-red-700 text-xl font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-700 mb-6">
            High-quality medical equipment supplied by Medono India.
            Suitable for hospitals, clinics, and healthcare professionals.
          </p>

          {/* Actions */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-red-700 text-white px-6 py-2 rounded font-semibold"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product);
                navigate("/checkout");
              }}
              className="bg-gray-900 text-white px-6 py-2 rounded font-semibold"
            >
              Buy Now
            </button>
          </div>

          {/* Quote Form */}
          <QuoteForm product={product} />
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-14">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

        <div className="space-y-4">
          <div className="border p-4 rounded">
            ⭐⭐⭐⭐⭐ – Excellent quality and fast delivery.
          </div>
          <div className="border p-4 rounded">
            ⭐⭐⭐⭐ – Product matched expectations, good support.
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-14">
        <h2 className="text-xl font-bold mb-4">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
