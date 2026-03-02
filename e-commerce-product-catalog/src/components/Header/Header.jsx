import styles from "./Header.module.scss";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Product Catalog</div>
      <nav className={styles.navigation}>
        <Navigation className={styles.navigation}/>
      </nav>
    </header>
  );
}

export default Header;
