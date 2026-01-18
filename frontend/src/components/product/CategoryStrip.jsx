import { products } from "../../data/products";

export default function CategoryStrip() {
  const categories = products.map((p) => p.title);

  const scrollToCategory = (category) => {
    const el = document.getElementById(category);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white shadow py-3">
      <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => scrollToCategory(cat)}
            className="min-w-32 text-center"
          >
            <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto"></div>
            <p className="text-sm mt-2 font-medium">{cat}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
