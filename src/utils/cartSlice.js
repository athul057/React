import { createSlice } from "@reduxjs/toolkit";



///RTK QUERY....
//Redux uses immer behind the scnes.
const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  items: [],
 },
 reducers: {
  addItem: (state, action) => {
   console.log("action is ", action)
   state.items.push(action.payload);
  },
  removeItem: (state) => {
   if (state.items.length > 0) {
    state.items.pop();
   }
  },
  clearItem: (state) => {
   state.items = [];
   //return {items:[]}
   //This new object will be replaced inside the origiinal state. ={items:[]}
  },
 },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
