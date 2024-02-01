import { createBrowserRouter } from "react-router-dom";
import { About, BuyNowPage, CartList, Home, LoginAndSignup, NoPage, Root } from "../pages";
import { Login, Signup } from "../components";
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
            path: '/account',
            element: <LoginAndSignup />,
            // children: [
            //    {
            //       path: '/login',
            //       element: <Login />
            //    },
            //    {
            //       path: '/signup',
            //       element: <Signup />
            //    }
            // ]
         },
         {
            path: "/*",
            element: <NoPage />,
         },
      ],
   },
]);
