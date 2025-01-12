import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001";

export const fetchPerformances = createAsyncThunk(
  "performances/fetchAll",
  async (userId) => {
    const response = await axios.get(`${API_URL}/performances`, {
      params: { userId },
    });
    return response.data;
  }
);

export const addPerformance = createAsyncThunk(
  "performances/add",
  async (performance) => {
    const response = await axios.post(`${API_URL}/performances`, performance);
    return response.data;
  }
);

export const deletePerformance = createAsyncThunk(
  "performances/delete",
  async (id) => {
    await axios.delete(`${API_URL}/performances/${id}`);
    return id;
  }
);

export const performanceSlice = createSlice({
  name: "performances",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerformances.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPerformances.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPerformances.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addPerformance.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deletePerformance.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default performanceSlice.reducer;
