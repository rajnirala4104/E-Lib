import { configureStore } from "@reduxjs/toolkit";
import cartStateReducer from "./state/cart.state";
import productStateReducer from "./state/products.state";

export default configureStore({
   reducer: {
      products: productStateReducer,
      cart: cartStateReducer,
   },
});
