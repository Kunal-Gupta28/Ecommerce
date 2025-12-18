import { products as initialProducts } from "../data/products";
import { useState } from "react";

export default function AdminPage() {
  const [data, setData] = useState(initialProducts);

  const updatePrice = (catIndex, itemIndex, price) => {
    const copy = [...data];
    copy[catIndex].items[itemIndex].price = price;
    setData(copy);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {data.map((cat, ci) => (
        <div key={cat.title} className="mb-8">
          <h2 className="font-semibold mb-3">{cat.title}</h2>

          {cat.items.map((p, pi) => (
            <div key={p.id} className="flex gap-4 items-center mb-2">
              <span className="flex-1 text-sm">{p.name}</span>

              <input
                className="border px-2 py-1 w-24"
                value={p.price}
                onChange={(e) =>
                  updatePrice(ci, pi, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
