import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    prdcts: [],
    qty: 0,
    ttl: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.qty += 1;
      state.prdcts.push(action.payload);
      state.ttl += action.payload.price * action.payload.quantity;
    },
  }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;
