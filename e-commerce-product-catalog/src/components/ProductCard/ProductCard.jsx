import { useContext } from "react";
import WishlistContext from "../../context/WishlistContext";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const isFavorite = isInWishlist(product.id);

  const { addToCart } = useContext(CartContext);

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden">
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.badges.includes("SALE") && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
            -{product.discount}%
          </span>
        )}
        {product.badges.includes("NEW") && (
          <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
            NEW
          </span>
        )}
      </div>

      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full transition-all shadow-sm active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-5 h-5 transition-colors duration-300 ${
            isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div className="aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={`https://picsum.photos/seed/${product.id}/500/625`}
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1 flex justify-between items-center text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          <span>{product.brand}</span>
          <span
            className={product.inStock ? "text-emerald-500" : "text-red-400"}
          >
            {product.inStock ? "В наявності" : "Немає"}
          </span>
        </div>

        <h3 className="mb-2 min-h-[40px]">
          <Link to={`/catalog/product/${product.id}`}>{product.name}</Link>
        </h3>

        <div className="flex items-center mb-4 text-amber-400 font-bold text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1 text-gray-700">{product.rating}</span>
          <span className="mx-1.5 text-gray-300">|</span>
          <span className="text-gray-400 font-normal">
            {product.reviewsCount} відгуків
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through mb-0.5">
                {product.oldPrice.toLocaleString()} ₴
              </span>
            )}
            <span className="text-xl font-black text-gray-900 leading-none">
              {product.price.toLocaleString()}{" "}
              <span className="text-sm font-medium">₴</span>
            </span>
          </div>

          <button
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
            className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 shadow-sm ${
              product.inStock
                ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 active:shadow-inner"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
