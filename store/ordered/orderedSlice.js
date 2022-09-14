import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderedSlice = createSlice({
  name: "Ordered",
  initialState,
  reducers: {
    addToOrdered: (state, action) => {
      return { orders: [action.payload, ...state.orders] };
    },
  },
});

export const { addToOrdered } = orderedSlice.actions;
export default orderedSlice.reducer;
