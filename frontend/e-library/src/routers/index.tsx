import { createBrowserRouter } from "react-router-dom";
import { Home, Root } from "../pages";
import BookPage from "../pages/BookPage";
import CategoryPage from "../pages/CategoryPage";

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
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/book/:id",
        element: <BookPage />
      }
    ],
  },
]);
