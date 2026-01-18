import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

/* Redux */
import { loadUser } from "./redux/slices/authSlice";

/* Common Components */
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./components/common/ProtectedRoute";

/* Pages */
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import OrderSuccess from "./pages/OrderSuccess";

/* Auth Pages */
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

/* Upload Page */
import UploadPage from "./pages/UploadPage";

export default function App() {
  const dispatch = useDispatch();

  // 🔐 Restore user session on refresh
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/upload" element={<UploadPage />} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
