import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./components/contactsSlice";
import { filterReducer } from "./components/filtersSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});
