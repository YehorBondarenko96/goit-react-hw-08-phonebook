import { createSlice } from "@reduxjs/toolkit";
import { searchForBackground } from "./searchForStyles";

const backgroundInitialState = {
    images: [],
    numbsImg:[],
    numbOfIter: 1
};

const backgroundSlice = createSlice({
    name: 'backgroundImages',
    initialState: backgroundInitialState,
    reducers: {
        writeNumbsImg (state, action){
                if (state.numbOfIter <= state.images.length){
                    if (state.numbsImg.length >= 5){
                state.numbsImg.splice(0, 1);
            };
            state.numbsImg.push(action.payload);
            state.numbOfIter +=1;
        }
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

export const { writeNumbsImg } = backgroundSlice.actions;
