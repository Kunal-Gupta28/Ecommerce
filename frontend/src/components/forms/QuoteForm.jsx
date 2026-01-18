import { useState } from "react";

export default function QuoteForm({ product }) {
  const [qty, setQty] = useState(1);
  const [msg, setMsg] = useState("");

  const send = () => {
    const text = encodeURIComponent(
      `Quote Request\n${product.name}\nQty: ${qty}\n${msg}`
    );
    window.open(`https://wa.me/918047304758?text=${text}`);
  };

  return (
    <div className="border p-4 mt-4 rounded">
      <input
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="border p-2 w-full mb-2"
      />
      <textarea
        onChange={(e) => setMsg(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Your requirement"
      />
      <button onClick={send} className="bg-green-600 text-white w-full py-2">
        Request Quote
      </button>
    </div>
  );
}
