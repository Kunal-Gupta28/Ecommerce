import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/product/ProductCard";

const HomePage = () => {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Loading products...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load products
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No products available
      </p>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
