import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        console.log('credentials: ', credentials);
        
        try {
            const res = await axios.post('/users/signup', credentials);
            setAuthHeader(res.data.token);
            console.log('res.data: ', res.data);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);