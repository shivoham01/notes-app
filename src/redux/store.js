import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './features/notesSlice'
import savedSlice from './features/savedSlice'

export const store = configureStore({
    reducer:{
        notes: notesSlice,
        savedNotes: savedSlice
    }
})