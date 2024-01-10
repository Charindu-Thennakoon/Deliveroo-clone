import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch("data/data2.json");
  return await response.json();
});

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default itemsSlice.reducer;
