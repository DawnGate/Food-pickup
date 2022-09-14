import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import orderedReducer from "./ordered/orderedSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ordered: orderedReducer,
  },
});
