import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ShopCategory from "../pages/ShopCategory";
import NotFound from "../Notfound";
import Shop from "../pages/Shop";
import Login from "../pages/LoginSignup";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import men_banner from "../components/assets/banner_mens.png";
import women_banner from "../components/assets/banner_women.png";
import kid_banner from "../components/assets/banner_kids.png";

const Router = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Shop />,
        },
        {
          path: "/mens",
          element: <ShopCategory banner={men_banner} category="men" />,
        },
        {
          path: "/womens",
          element: <ShopCategory category="women" banner={women_banner} />,
        },
        {
          path: "/kids",
          element: <ShopCategory category="kid" banner={kid_banner} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products",
          element: <Product />,
          children: [
            {
              path: ":id",
              element: <Product />,
            },
          ],
        },
      ],
    },
    {},
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={config} />;
};

export default Router;
