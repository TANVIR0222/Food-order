import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItem: 0,
  totalPrice: 0,
  tax: 0,
  texRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // add cart  items and all cart update
  reducers: {
    addToCard: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("items add cart ");
      }

      state.selectedItem = selectedItem(state);
      state.totalPrice = setTotalPice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    // cart count update =>>> and  update total price
    updateQuantity: (state, action) => {
      const products = state.products.map((product) => {
        if (product._id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            if (product.quantity > 1) {
              product.quantity -= 1;
            }
          }
        }
        return product;
      });
      state.selectedItem = selectedItem(state);
      state.totalPrice = setTotalPice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },

    // remove fore cart
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );

      state.selectedItem = selectedItem(state);
      state.totalPrice = setTotalPice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },

    // clear cart
    clearCart: (state) => {
      state.products = [];
      state.selectedItem = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

export const selectedItem = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  }, 0);

export const setTotalPice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price);
  }, 0);

export const setTax = (state) => selectedItem(state) * state.texRate;

export const setGrandTotal = (state) => {
  return setTotalPice(state) + setTotalPice(state) * state.texRate;
};

export const { addToCard, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
