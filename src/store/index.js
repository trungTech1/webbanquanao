import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/product.slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
export default store;
