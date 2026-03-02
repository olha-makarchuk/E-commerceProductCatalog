import { useEffect, useState } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const WISHLIST = "wishlist";

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    return getFromLocalStorage(WISHLIST) || [];
  });

  useEffect(() => {
    setToLocalStorage(WISHLIST, wishlistItems);
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const isExist = prevItems.some((item) => item.id === product.id);

      if (isExist) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return {
    wishlistItems,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
  };
};