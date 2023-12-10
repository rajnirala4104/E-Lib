import { Fragment, Suspense, useState } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { CartContext } from "./context/cart.context";
import redux from "./redux";
import { router } from "./routes";

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <Provider store={redux}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Suspense fallback={"loading..."}>
            <RouterProvider router={router} />
          </Suspense>
        </CartContext.Provider>
      </Provider>
    </Fragment>
  );
};
