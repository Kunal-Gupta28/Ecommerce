import ProductCard from "./ProductCard";

export default function ProductSection({ title, items }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-sm text-red-700 font-medium">View All →</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
