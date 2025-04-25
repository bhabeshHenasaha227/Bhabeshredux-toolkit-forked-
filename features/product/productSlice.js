const { createSlice } = require("@reduxjs/toolkit");
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: false,
  products: [],
  error: "",
};
const fetchDetails = createAsyncThunk("product/fetchDetails", (state) => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data.map((product) => product.title));
});
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      (state.loading = false), (state.products = action.payload);
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

console.log("productSlice", productSlice);
module.exports = productSlice.reducer;
module.exports.fetchDetails = fetchDetails;
