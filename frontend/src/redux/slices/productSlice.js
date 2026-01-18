import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

/* Fetch All Products */
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/products");
      console.log(res.data)
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

/* Fetch Single Product */
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingle",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Product not found"
      );
    }
  }
);

/* Product Slice */
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    singleProduct: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSingleProduct: (state) => {
      state.singleProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ---------- Fetch All ---------- */
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------- Fetch Single ---------- */
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleProduct = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.singleProduct = null;
      });
  },
});

export const { clearSingleProduct } = productSlice.actions;
export default productSlice.reducer;
