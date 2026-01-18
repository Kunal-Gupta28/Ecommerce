import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const CartPage = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: Number(e.target.value)
              }))
            }
          />

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default CartPage;
