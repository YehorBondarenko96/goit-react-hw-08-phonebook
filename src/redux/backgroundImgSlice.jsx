import { createSlice } from "@reduxjs/toolkit";
import { searchForBackground } from "./searchForStyles";

const backgroundSlice = createSlice({
    name: 'backgroundImages',
    initialState: { backgroundImages: []},
    extraReducers: builder => {
        builder
        .addCase(searchForBackground.pending, (state) => {state.backgroundImages = []})
        .addCase(searchForBackground.fulfilled, (state, action) => {
            state.backgroundImages = action.payload.map(img => img.largeImageURL);
        })
        .addCase(searchForBackground.rejected, (state) => {state.backgroundImages = []})
    }
});

export const backgroundReducer = backgroundSlice.reducer;
