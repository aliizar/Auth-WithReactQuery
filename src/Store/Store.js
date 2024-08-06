import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../Actions/Theme";
import CategoryReducer from "../Actions/User";
const store = configureStore({
    reducer : {
      theme : ThemeReducer,
      Category : CategoryReducer
    }
});

export default store;
