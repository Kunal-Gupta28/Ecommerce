import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import ProductCard from "../components/product/ProductCard";
import QuoteForm from "../components/forms/QuoteForm";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    singleProduct: product,
    items,
    loading,
    error,
  } = useSelector((state) => state.products);

  /* Fetch product */
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  /* Recently viewed (optimized) */
  useEffect(() => {
    if (!product) return;

    const viewed = JSON.parse(localStorage.getItem("recent")) || [];

    const updated = [
      {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
      },
      ...viewed.filter((p) => p.id !== product.id),
    ].slice(0, 5);

    localStorage.setItem("recent", JSON.stringify(updated));
  }, [product]);

  /* Loading */
  if (loading) {
    return (
      <p className="text-center py-20 text-gray-600">
        Loading product...
      </p>
    );
  }

  /* Error */
  if (error || !product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold">Product not found</h2>
      </div>
    );
  }

  /* Related products (same category) */
  const related = items
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Product Info */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {product.title}
          </h1>

          <p className="text-red-700 text-xl font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          {/* Actions */}
          <div className="flex gap-4 mb-6">
            <button
              disabled={loading}
              onClick={() =>
                dispatch(
                  addToCart({ ...product, quantity: 1 })
                )
              }
              className="bg-red-700 text-white px-6 py-2 rounded font-semibold disabled:opacity-60"
            >
              Add to Cart
            </button>

            <button
              disabled={loading}
              onClick={() => {
                dispatch(
                  addToCart({
                    ...product,
                    quantity: 1,
                    replace: true,
                  })
                );
                navigate("/checkout");
              }}
              className="bg-gray-900 text-white px-6 py-2 rounded font-semibold disabled:opacity-60"
            >
              Buy Now
            </button>
          </div>

          {/* Quote */}
          <QuoteForm product={product} />
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-14">
        <h2 className="text-xl font-bold mb-4">
          Customer Reviews
        </h2>

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
      {related.length > 0 && (
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
      )}
    </div>
  );
}
