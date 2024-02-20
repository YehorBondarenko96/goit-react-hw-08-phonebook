import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, patchContact } from "./opertions";

const contactsInitialState = {
    items: [],
    scrollLeftLists: 0,
    screenOrientation: 1,
    isLoading: false,
    error: null
    };

const forPending = (state) => {state.isLoading = true};
const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers:{
        setScrollLeftLists: (state, action) => {state.scrollLeftLists = action.payload},
        setScreenOrientation: (state, action) => {state.screenOrientation = action.payload}
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, forPending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, forRejected)
        .addCase(addContact.pending, forPending)
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, forRejected)
        .addCase(deleteContact.pending, forPending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, forRejected)
        .addCase(patchContact.pending, forPending)
        .addCase(patchContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1, action.payload);
        })
        .addCase(patchContact.rejected, forRejected)
    }
});

export const contactsReducer = contactsSlice.reducer;
export const {setScrollLeftLists, setScreenOrientation} = contactsSlice.actions;