import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import {
  AdminDashboard,
  AdminLayout,
  AdminLogin,
  AdminRegistration,
  BookPage,
  Cart,
  CategoryPage,
  Home,
  Login,
  Registration,
  Root
} from "../pages";

export const _ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "book/:id",
        element: <BookPage />
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      }
    ]
  },
  {
    path: "/admin/login",
    element: <AdminLogin />
  }, {
    path: "/admin/registration",
    element: <AdminRegistration />
  }
]);