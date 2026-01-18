import { useLocation } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { getAllProducts } from "../utils/productUtils";

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("q") || "";
  const products = getAllProducts();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-6">
        Search Results for "{query}"
      </h2>

      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
