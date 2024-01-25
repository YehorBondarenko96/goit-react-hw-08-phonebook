import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null
};

const forPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload.replace(/\D/g, "");
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(register.pending, forPending)
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, forRejected)
    }
});

export const authReducer = authSlice.reducer;