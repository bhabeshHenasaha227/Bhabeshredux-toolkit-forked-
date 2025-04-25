const { configureStore } = require("@reduxjs/toolkit");
const pizzaReducer = require("../features/pizza/pizzaSlice");
const burgerReducer = require("../features/burger/burgerSlice");
const productReducer = require("../features/product/productSlice");

// const reduxlogger= require("redux-logger");

// const logger=reduxlogger.createLogger();

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productReducer,
  },
  // middleware:(getdefaultMiddleWare)=>{
  //      return getdefaultMiddleWare().concat(logger)
  // }
});

module.exports = store;
