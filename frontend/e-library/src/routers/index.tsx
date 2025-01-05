import { createBrowserRouter } from "react-router-dom";
import { Home, Root } from "../pages";
import BookPage from "../pages/BookPage";
import { Cart } from "../pages/Cart";
import CategoryPage from "../pages/CategoryPage";
import Login from "../pages/Login";
import { Registration } from "../pages/Registration";

export const _ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/book/:id",
        element: <BookPage />
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);
