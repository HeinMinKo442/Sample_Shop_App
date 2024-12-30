import { createContext, useContext } from "react";
import all_products from "../components/assets/all_product";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const products = all_products;
  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShop = () => {
  return useContext(ShopContext);
};
