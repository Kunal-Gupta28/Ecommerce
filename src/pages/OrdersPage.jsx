import { useOrders } from "../context/OrderContext";

export default function OrdersPage() {
  const { orders } = useOrders();

  if (!orders.length) {
    return <p className="text-center py-20">No orders yet</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.map((o) => (
        <div key={o.id} className="border p-4 rounded mb-4">
          <p><strong>Date:</strong> {o.date}</p>
          <p><strong>Status:</strong> {o.status}</p>
          <p><strong>Items:</strong> {o.items.length}</p>
        </div>
      ))}
    </div>
  );
}
