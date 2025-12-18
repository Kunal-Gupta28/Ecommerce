export default function ProductCard({ product }) {
  const whatsappMsg = encodeURIComponent(
    `Hello, I am interested in:\n${product.name}\nPrice: ₹${product.price}`
  );

  return (
    <div className="p-3 shadow rounded flex flex-col">
      <img src={product.image} alt={product.name} className="h-36 mx-auto" />
      <p className="font-bold text-sm mt-2">{product.name}</p>
      <p className="text-red-700 font-semibold">₹ {product.price}</p>

      <a
        href={`https://wa.me/918047304758?text=${whatsappMsg}`}
        target="_blank"
        className="bg-green-600 text-white mt-3 text-center py-1 rounded"
      >
        Get Quote
      </a>
    </div>
  );
}
