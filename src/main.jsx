import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router/router.jsx";
import ShopContextProvider from "./contexts/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <StrictMode>
      <Router />
    </StrictMode>
  </ShopContextProvider>
);
