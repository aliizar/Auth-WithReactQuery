import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'Theme',
    initialState : {
        mode : "light"
    },
    reducers : {
        togglemode : (state)=> {
            state.mode =  state.mode === "light" ? "dark" : "light";
        }
    }
})

export default themeSlice.reducer
export const ThemeActions =  themeSlice.actions;