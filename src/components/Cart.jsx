const Cart = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="border p-4 rounded">
        <p>No items in cart</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default Cart;
