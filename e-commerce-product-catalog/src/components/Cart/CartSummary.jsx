import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import styles from "./CartSummary.module.scss";
import { TextField, Button } from "@mui/material";

function CartSummary() {
  const {
    getTotalPrice,
    getDiscountAmount,
    getFinalPrice,
    applyPromo,
  } = useContext(CartContext);

  const [code, setCode] = useState("");

  const handlePromo = () => {
    applyPromo(code);
  };

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>Сума товарів:</span>
        <span>{getTotalPrice().toLocaleString()} ₴</span>
      </div>

      <div className={styles.row}>
        <span>Знижка:</span>
        <span>-{getDiscountAmount().toLocaleString()} ₴</span>
      </div>

      <div className={styles.row}>
        <span>Доставка:</span>
        <span>0 ₴</span>
      </div>

      <div className={`${styles.row} ${styles.total}`}>
        <span>Загалом:</span>
        <span>{getFinalPrice().toLocaleString()} ₴</span>
      </div>

      <div className={styles.promo}>
        <TextField
          size="small"
          label="Промокод"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" onClick={handlePromo}>
          OK
        </Button>
      </div>

      <button className={styles.checkout}>
        Оформити замовлення
      </button>
    </div>
  );
}

export default CartSummary;