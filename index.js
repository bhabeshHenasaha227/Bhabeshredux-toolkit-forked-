const store = require("./app/store");
const { burgerActions } = require("./features/burger/burgerSlice");
const { pizzaActions } = require("./features/pizza/pizzaSlice");
const { fetchDetails } = require("./features/product/productSlice");

console.log("initialState", store.getState());

const unsibscribe = store.subscribe(() => {
  console.log("current State", store.getState());
});

// store.dispatch(pizzaActions.pizzaOrder())
// store.dispatch(burgerActions.burgerOrder());
store.dispatch(fetchDetails()).then(() => {
  console.log("my updated state ", store.getState());
});
unsibscribe();
