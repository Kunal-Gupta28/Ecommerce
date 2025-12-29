import Welcome from "../components/home/Welcome";
import CategoryStrip from "../components/product/CategoryStrip";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductSection from "../components/product/ProductSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/forms/Newsletter";
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
