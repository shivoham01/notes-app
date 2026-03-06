import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('notes')) || []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addToNotes: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromNotes: (state, action)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload)
        }
    }
})

export const { addToNotes, removeFromNotes } = notesSlice.actions
export default notesSlice.reducer