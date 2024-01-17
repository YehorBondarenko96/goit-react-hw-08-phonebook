import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { backgroundReducer } from "./backgroundImgSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        backgroundImages: backgroundReducer
    }
});