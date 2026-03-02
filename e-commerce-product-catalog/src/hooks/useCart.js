import { useState, useEffect } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const CART_KEY = "shopping_cart";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return getFromLocalStorage(CART_KEY) || [];
  });

  useEffect(() => {
    setToLocalStorage(CART_KEY, cartItems);
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const [discount, setDiscount] = useState(0);

  const applyPromo = (code) => {
    if (code === "SALE10") {
      setDiscount(0.1);
      return true;
    }
    return false;
  };

  const getDiscountAmount = () => {
    return getTotalPrice() * discount;
  };

  const getFinalPrice = () => {
    return getTotalPrice() - getDiscountAmount();
  };

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    discount,
    applyPromo,
    getDiscountAmount,
    getFinalPrice,
    cartItems,
  };
};
