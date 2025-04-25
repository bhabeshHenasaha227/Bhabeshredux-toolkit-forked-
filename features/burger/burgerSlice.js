const { createSlice } = require("@reduxjs/toolkit");
const { pizzaActions } = require("../pizza/pizzaSlice");

const initialState = {
  burgerBuns: 200,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burgerOrder: (state) => {
      state.burgerBuns--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pizzaActions.pizzaOrder, (state) => {
      state.burgerBuns--;
    });
  },
});

console.log(burgerSlice);

module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;
