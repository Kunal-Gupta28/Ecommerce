import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import OrderSuccess from "./pages/OrderSuccess";

/* Context */
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Protected Routes */}
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

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Order Success */}
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>

          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
