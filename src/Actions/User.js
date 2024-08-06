import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    type: "Select user",
    selected: false,
  },
  reducers: {
    toggleCategory: (state, action) => {
      state.type = action.payload;
      state.selected = action.payload !== "";
    },
  },
});

export default CategorySlice.reducer;
export const CategoryActions = CategorySlice.actions;
