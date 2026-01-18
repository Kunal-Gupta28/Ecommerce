import api from "../utils/axios";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const placeOrder = async () => {
    await api.post("/orders", { items: cart });
    dispatch(clearCart());
    toast.success("Order placed");
  };

  return <button onClick={placeOrder}>Place Order</button>;
};

export default CheckoutPage;
