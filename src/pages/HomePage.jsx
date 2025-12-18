import Welcome from "../components/Welcome";
import CategoryStrip from "../components/CategoryStrip";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

import { products } from "../data/products";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <CategoryStrip />
      <FeaturedProducts />

      {products.map((section) => (
        <ProductSection
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}

      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}
