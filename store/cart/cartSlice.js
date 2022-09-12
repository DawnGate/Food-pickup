import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsSelected: [],
  restaurantName: "",
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    changeCart: (state, action) => {
      const newState = { ...state };
      newState.restaurantName = action.payload.name;
      const selectItem = action.payload.item;
      if (
        newState.itemsSelected.find((item) => item.title === selectItem.title)
      ) {
        newState.itemsSelected = newState.itemsSelected.filter(
          (item) => item.title !== selectItem.title
        );
      } else {
        newState.itemsSelected = [...newState.itemsSelected, selectItem];
      }
      return newState;
    },
  },
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;
