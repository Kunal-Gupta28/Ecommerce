import Navbar from "./components/Navbar";
import CategoryStrip from "./components/CategoryStrip";
import ProductSection from "./components/ProductSection";
// import Welcome from "./components/Welcome";
// import VideosSection from "./components/VideosSection";
import RatingsSection from "./components/RatingsSection";
import Footer from "./components/Footer";

import { sections } from "./data/products";

export default function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <CategoryStrip />

      <div className="max-w-7xl mx-auto mt-5 space-y-12">
        {/* <Welcome /> */}

        {sections.map((sec) => (
          <ProductSection key={sec.title} {...sec} />
        ))}

        {/* <VideosSection /> */}
        <RatingsSection />
      </div>

      <Footer />
    </div>
  );
}
