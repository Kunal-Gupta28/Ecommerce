export default function PriceFilter({ setMax }) {
  return (
    <select
      onChange={(e) => setMax(Number(e.target.value))}
      className="border px-3 py-2 mb-4"
    >
      <option value="">All</option>
      <option value="500">Under ₹500</option>
      <option value="1000">Under ₹1000</option>
      <option value="5000">Under ₹5000</option>
    </select>
  );
}
