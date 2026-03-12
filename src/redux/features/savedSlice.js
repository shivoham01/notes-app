import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('savedNotes')) || []
}

const savedSlice = createSlice({
    name: 'savedNotes',
    initialState,
    reducers: {
        adddToSaved: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
            }
        },
        removeFromSaved: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { adddToSaved, removeFromSaved } = savedSlice.actions
export default savedSlice.reducer