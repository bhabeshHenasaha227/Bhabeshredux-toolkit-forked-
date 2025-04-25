const { createSlice } = require("@reduxjs/toolkit");
const initialState={
    pizzaBuns:100
}
const pizzaSlice=createSlice({
    name:"pizza",
    initialState,
    reducers:{
       pizzaOrder:(state)=>{
          state.pizzaBuns--
       }
    }
})

console.log("pizzaSlice",pizzaSlice);

module.exports= pizzaSlice.reducer;
module.exports.pizzaActions= pizzaSlice.actions;