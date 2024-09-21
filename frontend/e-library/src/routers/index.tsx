import { createBrowserRouter } from "react-router-dom";
import { Home, Root } from "../pages";
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
    ],
  },
]);
