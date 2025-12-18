import ProductCard from "./ProductCard";
import { products } from "../data/products";

const FeaturedProducts = () => {
  // Flatten category-based products into a single array
  const allProducts = products.flatMap((category) => category.items);

  // Pick first 4 products as featured
  const featured = allProducts.slice(0, 4);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {featured.map((item) => (
          <ProductCard
            key={`featured-${item.id}`}
            product={item}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
