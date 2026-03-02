import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem";
import CartSummary from "../../components/Cart/CartSummary";
import styles from "./Cart.module.scss";

import { Container, Typography, List, Snackbar, Alert } from "@mui/material";

function Cart() {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  const [removedItem, setRemovedItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleRemove = (item) => {
    removeFromCart(item.id);
    setRemovedItem(item);
    setOpen(true);
  };

  const handleUndo = () => {
    if (removedItem) {
      addToCart(removedItem, removedItem.quantity);
    }
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={4} fontWeight={700}>
        Кошик
      </Typography>

      <div className={styles.wrapper}>
        <List className={styles.list}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => handleRemove(item)}
            />
          ))}
        </List>

        <CartSummary />
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="info"
          action={
            <button
              onClick={handleUndo}
              style={{
                background: "none",
                border: "none",
                color: "#1976d2",
                cursor: "pointer",
              }}
            >
              Відмінити
            </button>
          }
        >
          Товар видалено
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Cart;
