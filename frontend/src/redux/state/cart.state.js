import { createSlice } from "@reduxjs/toolkit";

const cartState = createSlice({
   name: "Cart",
   initialState: {
      items: [],
   },
   reducers: {
      initialize: (state, action) => {
         state.items = action.payload;
      },
      addItemInCart: (state, action) => {
         const product = action.payload;
         const items = [...state.items];

         if (typeof product === "object") {
            const productIndex = items.findIndex(
               (item) => item.productdId === product.id
            );
            if (productIndex === -1) {
               items.push({
                  productId: product.id,
                  quentity: 1,
               });
            } else {
               items[productIndex].quentity += 1;
            }

            state.items = items;
         }
      },
      removeItemFormCart: (state, action) => {
         const product = action.payload;
         const items = [...state.items];
         const productIndex = items.findIndex(
            (item) => item.productId === product.id
         );
         if (productIndex >= 0) {
            items.splice(productIndex, 1);
            state.items = items;
         }
      },
   },
});

export const cartAction = cartState.actions;
export default cartState.reducer;
