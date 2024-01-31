import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
    try{
        const result = await axios.get('/contacts');
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async(dataForAdd, thunkAPI) => {
    try{
        const result = await axios.post('/contacts', dataForAdd);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try{
        const result = await axios.delete(`/contacts/${contactId}`);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const patchContact = createAsyncThunk('contacts/patchContact', async(dataForPatch, thunkAPI) => {
    const contactId = dataForPatch.id;
    const visualDataForPatch = {name: dataForPatch.name, number: dataForPatch.number};
    try{
        const result = await axios.patch(`/contacts/${contactId}`, visualDataForPatch);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});