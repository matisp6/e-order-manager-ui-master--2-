import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import CartProvider from "./CartContext";
import "./App.scss";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;