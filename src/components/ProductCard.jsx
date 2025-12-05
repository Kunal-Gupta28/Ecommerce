export default function ProductCard({ product }) {
  return (
    <div className="p-3 shadow rounded flex flex-col justify-between">
      <img src={product.image} alt="" className="h-36 mx-auto object-contain" />
      <p className="font-bold text-sm mt-2">{product.name}</p>
      <p className="text-red-700 font-semibold">₹ {product.price}</p>
      <button className="bg-red-700 text-white mt-3 w-full py-1 rounded">
        Get Quote
      </button>
    </div>
  );
}
