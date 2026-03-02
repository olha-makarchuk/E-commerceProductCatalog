import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <CartProvider>
        <WishlistProvider>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
