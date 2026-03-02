import { useContext } from "react";
import WishlistContext from "../../context/WishlistContext";
import CartContext from "../../context/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Wishlist.scss";

function Wishlist() {
  const { wishlistItems, toggleWishlist } =
    useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  const handleAddAll = () => {
    wishlistItems.forEach((item) => addToCart(item));
  };

  const handleShare = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    alert("Посилання скопійовано!");
  };

  if (!wishlistItems.length) {
    return (
      <div className="wishlist">
        <div className="wishlist__empty">
          ❤️ Ваш список обраного порожній
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <div className="wishlist__header">
        <h1>Обране ({wishlistItems.length})</h1>

        <div className="wishlist__actions">
          <button className="add-all" onClick={handleAddAll}>
            Додати всі в кошик
          </button>

          <button className="share" onClick={handleShare}>
            Поділитися
          </button>
        </div>
      </div>

      <div className="wishlist__grid">
        {wishlistItems.map((product) => (
          <div key={product.id} className="wishlist__card">
            <button
              className="wishlist__card-remove"
              onClick={() => toggleWishlist(product)}
            >
              ✕
            </button>

            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;