import { createSlice } from "@reduxjs/toolkit";
import { searchForBackground } from "./searchForStyles";

const backgroundInitialState = {
    images: [],
    numbsForImg: []
};

const backgroundSlice = createSlice({
    name: 'backgroundImages',
    initialState: backgroundInitialState,
    reducers: {
        createNumbs (state, action){
            state.numbsForImg = []; 
        }
    },
    extraReducers: builder => {
        builder
        .addCase(searchForBackground.pending, (state) => {state.images = []})
        .addCase(searchForBackground.fulfilled, (state, action) => {
            state.images = action.payload.map(img => img.largeImageURL);
        })
        .addCase(searchForBackground.rejected, (state) => {state.images = []})
    }
});

export const backgroundReducer = backgroundSlice.reducer;

export const { createNumbs } = backgroundSlice.actions;
