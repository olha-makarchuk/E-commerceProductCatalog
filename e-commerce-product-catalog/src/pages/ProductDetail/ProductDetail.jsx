import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import mockProducts from "../../data/mockProducts";
import WishlistContext from "../../context/WishlistContext";
import CartContext from "../../context/CartContext";
import styles from "./ProductDetail.module.scss";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

function ProductDetail() {
  const { id } = useParams();
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div className={styles.notFound}>Товар не знайдено</div>;
  }

  const isFavorite = isInWishlist(product.id);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageSection}>
          <div className={styles.imageBadge}>
            {product.badges.includes("SALE") && (
              <span className={styles.sale}>-{product.discount}%</span>
            )}
          </div>

          <ImageGallery images={product.images} productId={product.id} />
        </div>
        <div className={styles.infoSection}>
          <p className={styles.brand}>{product.brand}</p>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.ratingRow}>
            <span className={styles.stars}>
              {"★".repeat(Math.floor(product.rating))}
            </span>
            <span className={styles.reviews}>
              {product.reviewsCount} відгуків
            </span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>
              {product.price.toLocaleString()} ₴
            </span>
            {product.oldPrice && (
              <span className={styles.oldPrice}>
                {product.oldPrice.toLocaleString()} ₴
              </span>
            )}
          </div>

          <p className={styles.description}>
            Це високоякісний продукт від {product.brand}, розроблений для
            максимального комфорту та стилю. Опис товару допоможе вам дізнатися
            більше про його переваги та особливості.
          </p>

          <div className={styles.actions}>
            <div className={styles.quantityControl}>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button
              className={styles.addToCartBtn}
              onClick={() => addToCart(product, quantity)}
              disabled={!product.inStock}
            >
              {product.inStock ? "Додати у кошик" : "Немає в наявності"}
            </button>

            <button
              className={`${styles.wishlistBtn} ${isFavorite ? styles.active : ""}`}
              onClick={() => toggleWishlist(product)}
            >
              <svg
                fill={isFavorite ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>

          <div className={styles.meta}>
            <p>
              <span>Артикул:</span> {1000 + product.id}
            </p>
            <p>
              <span>Категорія:</span> {product.category}
            </p>
            <p>
              <span>Доставка:</span> Безкоштовна від 2000 ₴
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
