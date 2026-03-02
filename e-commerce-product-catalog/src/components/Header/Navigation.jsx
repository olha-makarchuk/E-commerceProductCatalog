import { useState } from "react";
import styles from "./Navigation.module.scss";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <div className={styles.navigation_container}>
      <div className={`${styles.nav_links} ${isOpen ? styles.nav_active : ""}`}>
        <Link to="/" className={styles.navigation_link}>
          Головна
        </Link>
        <Link to="/catalog" className={styles.navigation_link}>
          Каталог
        </Link>
        <Link to="/about-us" className={styles.navigation_link}>
          Про нас
        </Link>
        <Link to="/contacts" className={styles.navigation_link}>
          Контакти
        </Link>
      </div>

      <div className={styles.nav_right_group}>
        <div className={styles.nav_icons}>
          <div className={styles.badge_wrapper}>
            <Link to="/notifications" className={styles.navigation_icon}>
              🔔
            </Link>

            <span className={styles.badge}>3</span>
          </div>

          <Link to="/wishlist" className={styles.navigation_icon}>
            ❤️
          </Link>

          <div className={styles.badge_wrapper}>
            <Link to="/cart" className={styles.navigation_icon}>
              🛒
            </Link>
            {getTotalItems() > 0 && (
              <span className={styles.badge}>{getTotalItems()}</span>
            )}
          </div>
          <div className={`${styles.navigation_icon} ${styles.login}`}>
            Увійти
          </div>
        </div>

        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? styles.line1_open : ""}></div>
          <div className={isOpen ? styles.line2_open : ""}></div>
          <div className={isOpen ? styles.line3_open : ""}></div>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
