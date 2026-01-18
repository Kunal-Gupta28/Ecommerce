import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Find category by URL name
  const category = products.find(
    (c) => c.title.toLowerCase() === name.toLowerCase()
  );

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-bold mb-4">Category not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-red-700 text-white px-6 py-2 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">{category.title}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {category.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
