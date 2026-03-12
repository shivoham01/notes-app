import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('notes')) || [],
    editing: false
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
        },
        SetEditing: (state, action)=>{
            state.editing = action.payload
        },
        updateNote: (state,action)=>{
            state.items.push(...state, action.payload)
        }
    }
})

export const { addToNotes, removeFromNotes, SetEditing, updateNote } = notesSlice.actions
export default notesSlice.reducer