import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null
};

const forPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload.replace(/\D/g, "");
    if(state.error === '401'){
        state.token = null;
        state.isLoggedIn = false;
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        cleanError(state){state.error = null}
    },
    extraReducers: builder => {
        builder
        .addCase(register.pending, forPending)
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, forRejected)
        .addCase(logOut.pending, forPending)
        .addCase(logOut.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, forRejected)
        .addCase(logIn.pending, forPending)
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, forRejected)
    }
});

export const authReducer = authSlice.reducer;
export const {cleanError} = authSlice.actions;