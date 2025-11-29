import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeOne, removeItem, clearCart, total } =
    useCart();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No items in your cart.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.img}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      ₹{item.product.price} each
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeOne(item.product.id)}
                      className="px-3 py-1 border rounded-lg"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.qty}</span>
                    <button
                      onClick={() => addToCart(item.product)}
                      className="px-3 py-1 border rounded-lg"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold">
                    ₹{item.product.price * item.qty}
                  </p>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">
                Total: <span className="text-blue-600 dark:text-blue-400">₹{total}</span>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="px-4 py-2 border rounded-lg"
              >
                Clear Cart
              </button>
              <button className="btn-primary">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
