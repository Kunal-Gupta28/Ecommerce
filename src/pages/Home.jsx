import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    return matchName && matchCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-center py-24">
        <h1 className="text-5xl font-extrabold mb-4">ShopEase</h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto">
          Discover the best deals on electronics, fashion, and home essentials.  
          Fast delivery. Secure checkout.
        </p>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Featured Products
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="input-box sm:flex-1 mb-0"
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="input-box mb-0 sm:w-48"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue="all"
            >
              <option value="all">All categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            No products found. Try a different search.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`}>
                <ProductCard product={p} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
