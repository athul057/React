import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  items: [],
  length: 0,
 },
 reducers: {
  addItem: (state, action) => {
   state.items.push(action.payload);
   state.items.length++;
  },
  removeItem: (state) => {
   state.items.pop();
  },
  clearItem: (state) => {
   state.items = [];
  },
 },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions; // <-- cartSlice.actions, not cartSlice.action
export default cartSlice.reducer;
