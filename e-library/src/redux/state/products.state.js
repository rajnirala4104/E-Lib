import { createSlice } from "@reduxjs/toolkit";

const productState = createSlice({
   name: "praducts",
   initialState: {
      productList: [],
      filteredList: [],
      filters: {
         name: null,
         price: null,
      },
   },
   reducers: {
      initialize: (state, action) => {
         state.productList = action.payload;
      },
   },
});

export const productAction = productState.actions;

export default productState.reducer;
