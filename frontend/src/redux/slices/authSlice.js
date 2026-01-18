import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

/* ================= REGISTER ================= */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/register", data);
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

/* ================= LOGIN ================= */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

/* ================= LOAD USER (ON REFRESH) ================= */
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    } catch {
      return rejectWithValue("Not authenticated");
    }
  }
);

/* ================= LOGOUT ================= */
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/auth/logout");
      return true;
    } catch {
      return rejectWithValue("Logout failed");
    }
  }
);

/* ================= SLICE ================= */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* ---------- REGISTER ---------- */
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------- LOGIN ---------- */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------- LOAD USER ---------- */
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loadUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      /* ---------- LOGOUT ---------- */
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  }
});

export default authSlice.reducer;
