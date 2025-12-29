import ProductCard from "../common/ProductCard";

export default function ProductSection({ title, items }) {
  return (
    <section id={title} className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button className="text-sm text-red-700 font-medium">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
