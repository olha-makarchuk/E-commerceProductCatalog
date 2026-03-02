import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import MainLayout from "../components/layouts/MainLayout";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/catalog/product/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>
  );
}

export default AppRouter;
