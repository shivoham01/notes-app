import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('pinnedNotes')) || []
}

const pinnedSlice = createSlice({
    name: 'pinnedNotes',
    initialState,
    reducers: {
        addToPinned: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
            }
        },
        removeFromPinned: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        editNote: (state, action) => {
            const note = state.items.find(item => item.id === action.payload.id)
            if (note) {
                note.title = action.payload.title
                note.desc = action.payload.desc
            }
        }
    }
})

export const { addToPinned, removeFromPinned, editNote } = pinnedSlice.actions
export default pinnedSlice.reducer