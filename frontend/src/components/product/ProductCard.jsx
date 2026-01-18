import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slices/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlist.some(
    (item) => item._id === product._id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product._id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  {console.log(product?.image)}
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover rounded-md"
        />

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 text-xl"
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 flex-1">
        <h3 className="font-semibold text-lg truncate">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-2 mt-1">
          {product.description}
        </p>
      </div>

      {/* Price + Action */}
      <div className="mt-4 flex items-center justify-between">
<span className="font-bold text-lg">
  ₹{product.price.amount} / {product.price.unit}
</span>


        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
