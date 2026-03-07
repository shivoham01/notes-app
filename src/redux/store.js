import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './features/notesSlice'
import pinnedSlice from './features/pinnedSlice'

export const store = configureStore({
    reducer:{
        notes: notesSlice,
        pinnedNotes: pinnedSlice
    }
})