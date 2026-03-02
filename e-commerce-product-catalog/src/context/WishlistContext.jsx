import { createContext } from 'react';
import {useWishlist} from '../hooks/useWishlist';

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const wishlist = useWishlist();

  return (
    <WishlistContext.Provider value={wishlist}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContext