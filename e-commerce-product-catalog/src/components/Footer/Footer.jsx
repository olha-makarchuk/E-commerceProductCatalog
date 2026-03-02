import "./Footer.css";
import telegramImage from "../../assets/telegram.png";
import instagramImage from "../../assets/instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Про компанію</h3>
            <h3>Контакти</h3>
          </div>
          <div className="footer-column social-column">
            <h3>Ми в соцмережах:</h3>

            <div className="social-icons">
              <a href="https://t.me/yourlink" target="_blank" rel="noreferrer">
                <img
                  className="footer-icon"
                  src={telegramImage}
                  alt="Telegram"
                />
              </a>
              <a
                href="https://instagram.com/yourlink"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-icon"
                  src={instagramImage}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ProductCatalog. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
