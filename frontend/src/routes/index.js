import { createBrowserRouter } from "react-router-dom";
import { About, BuyNowPage, CartList, Home, NoPage, Root } from "../pages";
export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/buynow/:bookId",
            element: <BuyNowPage />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/cart",
            element: <CartList />,
         },
         {
            path: "/*",
            element: <NoPage />,
         },
      ],
   },
]);
